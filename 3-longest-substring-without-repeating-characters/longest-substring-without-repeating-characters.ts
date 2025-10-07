function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0

    let slow = 0
    let fast = 0

    const charSet: Set<string> = new Set()

    while (fast < s.length) {
        if (charSet.has(s[fast])) {
            charSet.delete(s[slow])
            slow++
        } else {
            maxLength = Math.max(maxLength, fast - slow + 1)
            charSet.add(s[fast])
            fast++
        }
    }

    return maxLength
};