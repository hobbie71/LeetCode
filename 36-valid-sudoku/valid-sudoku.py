class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rowMap: Dict[int, str] = defaultdict(str)
        colMap: Dict[int, str] = defaultdict(str)
        squareMap: Dict[str, str] = defaultdict(str)

        for row in range(len(board)):
            for col in range(len(board)):
                value = board[col][row]
                if value == ".":
                    continue
                
                if value in rowMap[row]:
                    return False
                rowMap[row] = rowMap.get(row) + value

                if value in colMap[col]:
                    return False
                colMap[col] = colMap.get(col) + value

                key = f"{col // 3}-{row // 3}"
                if value in squareMap[key]:
                    return False
                squareMap[key] = squareMap.get(key) + value

        return True
