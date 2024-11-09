const express = require('express');//importing express modulo
const bodyParser = require('body-parser'); //importing body parder to access data from json request body
const trafficViolationRoutes = require('./Routes/trafficviolationroutes');  
const app = express(); //initializing express application
// const cors = require('cors');
// app.use(cors());

app.use(bodyParser.json());
// /api is prefix to routing
app.use('/api', trafficViolationRoutes);

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



