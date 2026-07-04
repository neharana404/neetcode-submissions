class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
       
        left = 0
        right = len(nums) - 1
        res = len(nums)
        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                res = mid
                right = mid - 1

        return res