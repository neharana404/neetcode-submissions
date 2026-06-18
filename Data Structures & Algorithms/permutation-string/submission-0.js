class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n1 = s1.length;
        const n2 = s2.length;

        if (n1 > n2) return false;

        const s1Counts = new Array(26).fill(0);
        const s2Counts = new Array(26).fill(0);

        // Fill initial window
        for (let i = 0; i < n1; i++) {
            s1Counts[s1.charCodeAt(i) - 97] += 1;
            s2Counts[s2.charCodeAt(i) - 97] += 1;
        }

        if (JSON.stringify(s1Counts) === JSON.stringify(s2Counts)) return true;

        // Sliding window
        for (let i = n1; i < n2; i++) {
            s2Counts[s2.charCodeAt(i) - 97] += 1;
            s2Counts[s2.charCodeAt(i - n1) - 97] -= 1;

            if (JSON.stringify(s1Counts) === JSON.stringify(s2Counts)) return true;
        }

        return false;
    }
}
