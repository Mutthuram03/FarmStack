const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

// Route files
const userRoutes = require('./routes/userRoutes');
const cropRoutes = require('./routes/cropRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/users', userRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

