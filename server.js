const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Import routes
const trafficViolationRoutes = require('./Routes/trafficviolationroutes');

// Middleware
app.use(bodyParser.json()); // For parsing application/json

// Use the routes
app.use('/api', trafficViolationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




