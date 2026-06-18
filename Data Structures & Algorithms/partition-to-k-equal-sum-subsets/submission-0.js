class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        const totalSum = nums.reduce((a, b) => a + b, 0);
    if (totalSum % k !== 0) return false;

    const target = totalSum / k;
    nums.sort((a, b) => b - a); // descending order
    if (nums[0] > target) return false;

    const used = new Array(nums.length).fill(false);

    function backtrack(startIdx, kLeft, currentSum) {
        if (kLeft === 0) return true;
        if (currentSum === target) {
            return backtrack(0, kLeft - 1, 0);
        }

        for (let i = startIdx; i < nums.length; i++) {
            if (used[i] || currentSum + nums[i] > target) continue;

            used[i] = true;
            if (backtrack(i + 1, kLeft, currentSum + nums[i])) return true;
            used[i] = false;

            // Optimization: if the current num didn't fit an empty bucket, no point trying others
            if (currentSum === 0) break;
        }

        return false;
    }

        return backtrack(0, k, 0);
    }
}
