class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let res = []

        for (let num of nums) {
            res.push(num)
        }
        
        for (let num of nums) {
            res.push(num)
        }
        return res
    }
}
