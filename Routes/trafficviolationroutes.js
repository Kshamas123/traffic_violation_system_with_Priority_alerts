// Routes/trafficviolationroutes.js
const express = require('express');
const router = express.Router();
const TrafficViolation = require('../Models/TrafficViolations'); 

router.post('/violations/record', (req, res) => {
    const { violation_type, violation_severity, location, fine_amount } = req.body;
    
   
    const violation = new TrafficViolation(violation_type, violation_severity, location, fine_amount);
    


    res.json({
        message: 'Violation recorded successfully',
        violation: violation.toString()
    });
});

module.exports = router;



