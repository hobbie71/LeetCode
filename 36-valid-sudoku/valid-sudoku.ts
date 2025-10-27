function isValidSudoku(board: string[][]): boolean {
    const colMap: Map<number, string> = new Map()
    const rowMap: Map<number, string> = new Map()
    const gridMap: Map<string, string> = new Map()

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            const value: string = board[row][col]

            if (value === ".") continue

            // Check & Store col
            const currentCol: string = colMap.get(col)
            if (!currentCol) {
                colMap.set(col, value)
            } else {
                if (currentCol.includes(value)) return false
                colMap.set(col, currentCol + value)
            }
            
            // Check & Store row
            const currentRow: string = rowMap.get(row)
            if (!currentRow) {
                rowMap.set(row, value)
            } else {
                if (currentRow.includes(value)) return false
                rowMap.set(row, currentRow + value)
            }

            // Check & Store 3x3
            const key = createGridKey(col, row)
            const currentGrid: string = gridMap.get(key)
            if (!currentGrid) {
                gridMap.set(key, value)
            } else {
                if (currentGrid.includes(value)) return false
                gridMap.set(key, currentGrid + value)
            }
        }   
    }

    return true
};

const createGridKey = (col: number, row: number): string => {
    return `${Math.floor(col / 3)}-${Math.floor(row / 3)}`
}