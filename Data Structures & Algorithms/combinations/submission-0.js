class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = []

        const backtrack = (i, cur) => {
            if (i > n) {
                if (cur.length === k) {
                    res.push([...cur])
                }
                return
            }
            cur.push(i)
            backtrack(i + 1, cur)
            cur.pop()
            backtrack(i + 1, cur)
        }

        backtrack(1, [])
        return res
    }
}
