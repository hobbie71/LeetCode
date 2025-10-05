function isValidSudoku(board: string[][]): boolean {
    const colMap = new Map<number, string>()
    const squareMap = new Map<string, string>()

    for (let row = 0; row < board.length; row++) {
        const rowArray = board[row]
        const rowMap = new Map<number, number>()

        for (let col = 0; col < rowArray.length; col++) {
            if (rowArray[col] === ".") continue

            const value = +rowArray[col]

            // Check duplicates in rows
            if (rowMap.has(value)) {
                return false 
            } else {
                rowMap.set(value, 1);
            }

            // Check duplicates in col
            const colValue: string = colMap.get(col)
            if (colValue) {
                if (colValue.includes(value.toString())) {
                    return false
                } else {
                    colMap.set(col, colValue + value)
                }
            } else {
                colMap.set(col, value.toString())
            }

            // Check duplicates in square
            const squareKey: string = `${Math.floor(col / 3)}-${Math.floor(row / 3)}`
            const squareValue: string = squareMap.get(squareKey)

            if (squareValue) {
                if (squareValue.includes(value.toString())) {
                    return false
                } else {
                    squareMap.set(squareKey, squareValue + value)
                }
            } else {
                squareMap.set(squareKey, value.toString())
            }
        }
    }

    return true
};