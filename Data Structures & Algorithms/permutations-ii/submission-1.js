class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const n = nums.length
        const res = []
        const perm = []
        const count = {}

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        console.log(count)
        const backtrack = () => {
            if (perm.length == nums.length) {
                res.push([...perm])
                return
            }

            for (const num in count) {
                if (count[num] > 0) {
                    perm.push(num)
                    count[num]--
                    backtrack()
                    count[num]++
                    perm.pop()
                }
            }
        }
        backtrack()
        return res

    }
}
