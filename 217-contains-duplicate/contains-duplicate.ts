function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number, boolean>()

    for (let num of nums) {
        if (map.has(num)) return true
        else map.set(num, true)
    }

    return false
};