class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0, r = arr.length - 1
        while (l < r) {
            const mid = Math.floor((l + r) /2)
            if (arr[mid] < x) {
                l = mid + 1
            } else {
                r = mid
            }
        }

        l = l - 1
        r = l + 1

        while (r - l - 1 < k) {
            if (l < 0) {
                r++
            } else if (r >= arr.length) {
                l--
            } else if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
                l--
            } else {
                r++
            }
        }
        return arr.slice(l + 1, r)
    }
}
