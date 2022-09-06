
// https://leetcode.com/submissions/detail/731631281/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let rst = []
    let ctn = {}
    for(let i = 0; i < nums.length; i++) {
        let n = ctn[target - nums[i]]
        if(n >= 0) {
            rst.push(n, i)
            break
        }
        
        ctn[nums[i]] = i
    }
    return rst
};