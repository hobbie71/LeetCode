class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        numToLetters = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        output: List[str] = []

        def backtrack(builder: List[str], index: int):
            if len(builder) is len(digits):
                output.append("".join(builder))
                return

            for char in numToLetters[digits[index]]:
                builder.append(char)
                backtrack(builder, index + 1)
                builder.pop()

        backtrack([], 0)
        return output