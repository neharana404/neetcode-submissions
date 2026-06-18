class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums.sort((a, b) => a - b);           // sort so duplicates are adjacent
        const n = nums.length;
        const res = [];
        const sol = [];
        const used = new Array(n).fill(false); // track which indices are in 'sol'

        function backtrack() {
            if (sol.length === n) {
            res.push(sol.slice());
            return;
            }

            for (let i = 0; i < n; i++) {
            if (used[i]) continue; // already used this index

            // skip duplicates: if same value as previous and previous wasn't used
            // then picking nums[i] here would duplicate a branch we already explored
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            used[i] = true;
            sol.push(nums[i]);
            backtrack();
            sol.pop();
            used[i] = false;
            }
        }

        backtrack();
        return res;
    }
}
