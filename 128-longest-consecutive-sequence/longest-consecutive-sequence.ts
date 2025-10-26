function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let longestLength = 0

    for (let num of set.values()) {
        if (set.has(num - 1)) continue

        let hasNextValue: boolean = set.has(num + 1)
        let length = 1

        while (hasNextValue) {
            length++
            hasNextValue = set.has(num + length)
        }

        longestLength = Math.max(longestLength, length)
    }

    return longestLength
};