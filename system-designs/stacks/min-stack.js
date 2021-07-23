/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.minStack = [];
    this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.min = Math.min(this.min,val);
    this.minStack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let poppedVal = this.minStack.pop();
    
    if(this.min === poppedVal){
        this.min = Math.min( ...this.minStack );
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.minStack[this.minStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */