class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length
        let l = 0, r = 1
        let res = 0

        while (r < n) {
            if (prices[l] < prices[r]) {
                let diff = prices[r] - prices[l]
                res = Math.max(res, diff)
            } else {
                l = r
            }
            r++
        }
        return res
    }
}
