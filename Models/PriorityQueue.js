class priorityqueue{
    constructor(){
      this.queue=[]
    }
    push(violation) {
        this.queue.push(violation)
        this.queue.sort((a, b) => {
            const order = { "high": 1, "medium": 2, "low": 3 }
            return order[a.violation_severity] - order[b.violation_severity];
        })
    }  
    pop()
    {
        return this.queue.shift()
    }
    peek()
    {
        return this.queue[0]
    }
    isempty()
    {
        return this.queue.length==0
    }
    getAll() {
        return this.queue;
    }
}
module.exports=priorityqueue