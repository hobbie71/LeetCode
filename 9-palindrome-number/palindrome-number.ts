function isPalindrome(x: number): boolean {
    if (x < 0) return false

    const numStr = x.toString()
    let left = 0
    let right = numStr.length - 1

    while (left < right) {
        if (numStr[left] !== numStr[right]) return false

        left++
        right--
    }

    return true
};