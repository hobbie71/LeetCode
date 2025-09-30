function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const neededNum = target - num

        if (map.has(neededNum)) return [map.get(neededNum), i]

        map.set(num, i)
    }
};