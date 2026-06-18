class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const last = new Map(); // value -> last index

        for (let i = 0; i < nums.length; i++) {
            const x = nums[i];
        if (last.has(x) && i - last.get(x) <= k) return true;
            last.set(x, i);
        }
        return false;
    }
}
