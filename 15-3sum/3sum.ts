function threeSum(nums: number[]): number[][] {
    /**
     * Options:
     * Brute force
     * For loop + 2Sum
     */

    const output: number[][] = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) continue

        // 2Sum
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const total = nums[i] + nums[left] + nums[right]

            if (total > 0) right--
            else if (total < 0) left++
            else {
                output.push([nums[i], nums[left], nums[right]])
                left++
                while (nums[left] === nums[left - 1]) left++
            }
        }
    }

    return output
};