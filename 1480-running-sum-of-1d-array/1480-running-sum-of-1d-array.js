/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const stack = []
    let sum = 0
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        stack.push(sum)
    }
    return stack
};