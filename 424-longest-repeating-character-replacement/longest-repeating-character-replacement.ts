function characterReplacement(s: string, k: number): number {
    
    const map = new Map<string, number>()
    let output = 0
    
    let slow = 0
    let fast = 0

    while (fast <= s.length) {
        const windowLength = fast - slow
        let replacementsUsed = windowLength - Math.max(0, ...map.values())
        
        if (replacementsUsed > k) {
            map.set(s[slow], (map.get(s[slow]) || 0) - 1)
            slow++
        } else {
            output = Math.max(output, windowLength)
            map.set(s[fast], (map.get(s[fast]) || 0) + 1)
            fast++
        }

    }

    return output
};