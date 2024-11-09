//class created to record the violation  when user routes to /record the server performs this action creating object for the trafficviolation class in sense records the details
class TrafficViolation {
    constructor(violation_type, violation_severity, location, fine_amount) {
        this.violation_type = violation_type;
        this.violation_severity = violation_severity;
        this.location = location;
        this.fine_amount = fine_amount;
    }

    toString() {
        return `Violation: ${this.violation_type}, Severity: ${this.violation_severity}, Location: ${this.location}, Fine Amount: ${this.fine_amount}`;
    }
}

module.exports = TrafficViolation; // Export the class
