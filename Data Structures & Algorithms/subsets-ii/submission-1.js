class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const n = nums.length
        const res = []
        nums.sort((a, b) => a - b)

        function backtrack(i, sol) {
            if (i >= n) {
                res.push([...sol])
                return
            }

            sol.push(nums[i])
            backtrack(i + 1, sol)
            sol.pop()

            while (i + 1 < n && nums[i] === nums[i+1]) {
                i++
            } 
            backtrack(i + 1, sol)
        }
        backtrack(0, [])
        return res
    }
}
