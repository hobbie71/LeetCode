class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        char_count = {}

        for char in s:
            if char in char_count:
                char_count[char] += 1
            else:
                char_count[char] = 1

        for char in t:
            if char_count.get(char, 0) <= 0:
                return False
            char_count[char] -= 1

        return max(char_count.values()) == 0