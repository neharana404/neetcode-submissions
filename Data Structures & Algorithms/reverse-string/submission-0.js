class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let n = s.length, l = 0, r = n - 1

        while (l < r) {
            let tmp = s[l]
            s[l] = s[r]
            s[r] = tmp
            l++
            r--
        }

        return s
    }
}
