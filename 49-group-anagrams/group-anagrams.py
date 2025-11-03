class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        grouped_anagrams = defaultdict(list)

        for string in strs:
            key = "".join(sorted(string))
            grouped_anagrams[key].append(string)

        return list(grouped_anagrams.values())