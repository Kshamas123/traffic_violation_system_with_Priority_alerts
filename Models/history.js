class history {
    constructor() {
        this.history_of_violation = []; 
    }
    push(violation) {
        this.history_of_violation.push(violation);
    }
    pop() {
        return this.history_of_violation.pop();
    }
    peek() {
        return this.history_of_violation[this.history_of_violation.length - 1];
    }
    empty() {
        return this.history_of_violation.length === 0;
    }
    getAll() {
        return this.history_of_violation;
    }
}

module.exports = history;

 