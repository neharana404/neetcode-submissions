class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = []
        candidates.sort((a, b) => a - b)

        const backtrack = (i, cur, total) => {
            if (total === target) {
                res.push([...cur])
                return
            } 
            if ( total > target || i === candidates.length ) {
                return
            }

            cur.push(candidates[i])
            backtrack(i + 1, cur, total + candidates[i])
            cur.pop()

            while (
                i + 1 < candidates.length && candidates[i] === candidates[i + 1]
            ) {
                i++
            }
            backtrack(i + 1, cur, total)
        }

        backtrack(0, [], 0)
        return res
    }
}
