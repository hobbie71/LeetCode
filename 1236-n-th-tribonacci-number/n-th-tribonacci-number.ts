function tribonacci(n: number): number {
    const nums: number[] = []

    nums[0] = 0
    nums[1] = 1
    nums[2] = 1
    nums[3] = 2

    for (let i = 4; i <= n; i++) {
        nums[i] = nums[i - 1] + nums[i - 2] + nums[i - 3]
    }

    return nums[n]
};