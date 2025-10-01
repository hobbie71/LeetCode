function isPalindrome(s: string): boolean {
    // Removing any non-alphanumeric characters
    const str = s.replace(/[\W_]/g, "").toLowerCase()

    // Two pointer palindrome check
    let left = 0, right = str.length - 1

    while (left < right) {
        if (str[left] !== str[right]) return false
        
        left++
        right--
    }

    return true
};