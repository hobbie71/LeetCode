function findLHS(nums: number[]): number {
    nums.sort((a, b) => a - b)

    let maxLength = 0
    let slow = 0
    let fast = 0

    while (fast < nums.length) {
        if (nums[fast] - nums[slow] > 1) {
            slow++
        } else {
            fast++
        }
        
        if (nums[fast] - nums[slow] === 1) maxLength = Math.max(maxLength, fast - slow + 1)
    }

    return maxLength
};