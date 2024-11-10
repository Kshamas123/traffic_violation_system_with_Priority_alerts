const express = require('express');
const router = express.Router();
const TrafficViolation = require('../Models/TrafficViolations'); 
const history = require('../Models/history');
const priorityqueue=require('../Models/PriorityQueue')
const store_history = new history();
const queue=new priorityqueue();

// POST route to record violations
router.post('/violations/record', (req, res) => {
    const { violation_type, violation_severity, location, fine_amount } = req.body;
    
    const violation = new TrafficViolation(violation_type, violation_severity, location, fine_amount);
    
    store_history.push(violation); 
    queue.push(violation)
    res.json({
        message: 'Violation recorded successfully',
        violation: violation.toString()
    });
});


router.delete('/violations/undo', (req, res) => {
  
    if (store_history.empty()) {
        return res.status(404).json({ message: "No violation to undo" });
    }


    const violation = store_history.pop();
    res.json({
        message: 'Violation undone',
        violation: violation.toString()
    });
});


router.get('/violations/history', (req, res) => {
    const violationHistory = store_history.getAll(); // Fetch all history records
    if (violationHistory.length === 0) {
        return res.status(404).json({ message: "No violation history found" });
    }

    res.json({
        message: 'Violation history fetched successfully',
        history: violationHistory.map(v => v.toString()) // Map to string representations
    });
});

router.get('/violations/prioritywise_violation', (req, res) => {
    const violationpriority = queue.getAll(); 

    if (violationpriority.length === 0) {
        return res.status(404).json({ message: "No violations found" });
    }

    res.json({
        message: 'Violations according to priority fetched successfully',
        info: violationpriority.map(v => v.toString()) 
    });
});


router.get('/violations/process',(req,res)=>{
 if(queue.isempty())
 {
    return res.status(404).json({message:"no violation to process"})
 }

 const violation=queue.pop()
 res.json({
    message:"process violated",
    violation:violation.toString()
 })
})


module.exports = router;






