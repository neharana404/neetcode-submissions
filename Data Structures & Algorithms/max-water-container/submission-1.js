class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length
        let l = 0
        let r = n - 1
        let res = 0

        while (l < r) {
            const max_area = Math.min(heights[l], heights[r]) * (r - l)
            res = Math.max(res, max_area)
            if (heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        }
        return res
    }
}
