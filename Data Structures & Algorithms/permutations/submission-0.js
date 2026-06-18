class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length
        const res = []
        const sol = []

        function backtrack() {
            if (sol.length === n) {
                res.push([...sol])
                return
            }

            for (let x of nums) {
                if (!sol.includes(x)) {
                    sol.push(x)
                    backtrack()
                    sol.pop()
                }
            }
        }
        backtrack()
        return res
    }
}
