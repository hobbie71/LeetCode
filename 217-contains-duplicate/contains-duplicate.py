class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        my_hashmap = {}
        for num in nums:
            if num in my_hashmap: 
                return True
            my_hashmap[num] = 1
        return False