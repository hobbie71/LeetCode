function findMaxAverage(nums: number[], k: number): number {
    let sum: number = nums.slice(0, k).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let maxSum = sum

    for (let right = k; right < nums.length; right++) {
        sum += nums[right] - nums[right - k]
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum / k
};