import { useState } from "react";

export const RentalCalendar = ({ equipment }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear] = useState(new Date().getFullYear());

  // Mock booked dates for demonstration
  const bookedDates = [5, 8, 12, 15, 19, 23, 27];
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();

  const renderCalendar = () => {
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day calendar-day-empty"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isBooked = bookedDates.includes(day);
      const isSelected = selectedDate === day;
      const isPast = selectedMonth === new Date().getMonth() && day < new Date().getDate();
      
      days.push(
        <div
          key={day}
          className={`calendar-day ${isBooked ? 'calendar-day-booked' : ''} ${isSelected ? 'calendar-day-selected' : ''} ${isPast ? 'calendar-day-past' : ''}`}
          onClick={() => !isBooked && !isPast && setSelectedDate(day)}
          style={{ cursor: isBooked || isPast ? 'not-allowed' : 'pointer' }}
        >
          {day}
          {isBooked && <div className="calendar-dot"></div>}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="rental-calendar">
      <div className="calendar-header">
        <button 
          className="calendar-nav-btn" 
          onClick={() => setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11)}
        >
          ←
        </button>
        <div className="calendar-month">{months[selectedMonth]} {selectedYear}</div>
        <button 
          className="calendar-nav-btn" 
          onClick={() => setSelectedMonth(selectedMonth < 11 ? selectedMonth + 1 : 0)}
        >
          →
        </button>
      </div>
      
      <div className="calendar-weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className="calendar-weekday">{day}</div>
        ))}
      </div>
      
      <div className="calendar-grid">
        {renderCalendar()}
      </div>
      
      <div className="calendar-legend">
        <div className="calendar-legend-item">
          <div className="calendar-legend-box" style={{ background: "#fff" }}></div>
          <span>Available</span>
        </div>
        <div className="calendar-legend-item">
          <div className="calendar-legend-box calendar-day-booked"></div>
          <span>Booked</span>
        </div>
        <div className="calendar-legend-item">
          <div className="calendar-legend-box calendar-day-selected"></div>
          <span>Selected</span>
        </div>
      </div>
      
      {selectedDate && (
        <div style={{ marginTop: 16, padding: 16, background: "#f7fafc", borderRadius: 8 }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            📅 Selected: {months[selectedMonth]} {selectedDate}, {selectedYear}
          </div>
          {equipment && (
            <div style={{ fontSize: "0.9rem", color: "#4a5568" }}>
              Rental Rate: ₹{equipment.priceDay}/day or ₹{equipment.priceHour}/hour
            </div>
          )}
          <button className="submit-btn" style={{ marginTop: 12, width: "100%" }}>
            Request Booking
          </button>
        </div>
      )}
    </div>
  );
};
