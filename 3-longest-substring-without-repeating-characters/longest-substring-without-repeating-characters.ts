function lengthOfLongestSubstring(s: string): number {
    let longestWindow = 0
    const set: Set<string> = new Set()
    
    let left = 0
    let right = 0

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right])
            right++
            longestWindow = Math.max(longestWindow, right - left)
        } else {
            set.delete(s[left])
            left++
        }
    }

    return longestWindow
};