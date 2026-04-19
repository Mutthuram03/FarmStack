export const Stars = ({ rating }) => {
  const full = Math.floor(rating);
  return (
    <span className="stars">
      {"★".repeat(full)}{"☆".repeat(5 - full)}{" "}
      <span style={{ color: "#718096", fontSize: "0.8em" }}>{rating}</span>
    </span>
  );
};
