function lengthOfLongestSubstring(s: string): number {
    if (s.length === 1) return 1

    let longestSubstring = 0

    let slow = 0
    let fast = 1

    while (fast <= s.length) {
        const char = s.split("")[fast]
        
        longestSubstring = Math.max(longestSubstring, fast - slow)
        
        if (s.slice(slow, fast).includes(char)) {

            while (s.slice(slow, fast).includes(char)) {
                slow++
            }
        }
        
        fast++
    }

    return longestSubstring
};