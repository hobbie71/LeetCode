class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rowMap: Dict[int, str] = defaultdict(str)
        colMap: Dict[int, str] = defaultdict(str)
        squareMap: Dict[str, str] = defaultdict(str)

        for row, rowArray in enumerate(board):
            for col, value in enumerate(rowArray):
                if value == ".":
                    continue
                
                if value in rowMap[row]:
                    return False
                rowMap[row] = rowMap.get(row) + value

                if value in colMap[col]:
                    return False
                colMap[col] = colMap.get(col) + value

                key = getSquareKey(col, row)
                if value in squareMap[key]:
                    return False
                squareMap[key] = squareMap.get(key) + value

        return True

def getSquareKey(col: int, row: int) -> str:
    return f"{math.floor(col / 3)}-{math.floor(row / 3)}"
