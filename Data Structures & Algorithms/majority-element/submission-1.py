class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        
        m = {}

        for n in nums:
            m[n] = m.get(n, 0) + 1
        
        
        return max(m, key=m.get)       