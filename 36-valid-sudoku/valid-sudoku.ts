function isValidSudoku(board: string[][]): boolean {
    const rowSet: Set<string> = new Set()
    const colMap: Map<number, string> = new Map()
    const squareMap: Map<string, string> = new Map()

    for (let row = 0; row < board.length; row++) {
        const rows = board[row]

        for (let col = 0; col < rows.length; col++) {
            const value = rows[col]
            if (value === ".") continue

            // Check Row
            if (rowSet.has(value)) return false
            rowSet.add(value)

            // Check col
            const colValue = colMap.get(col)
            if (colValue && colValue.includes(value)) return false
            colMap.set(col, colValue + value)

            // Check square
            const key = getSquareKey(col, row)
            const squareValue = squareMap.get(key)
            if (squareValue && squareValue.includes(value)) return false
            squareMap.set(key, squareValue + value)
        }

        rowSet.clear()
    }

    return true
};

const getSquareKey = (col: number, row: number): string => {
    return `${Math.floor(col / 3)}-${Math.floor(row / 3)}`
}