/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums;
    this.clone = [...this.nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = this.clone.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.clone[i], this.clone[j]] = [this.clone[j], this.clone[i]];
    }
    return this.clone;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */