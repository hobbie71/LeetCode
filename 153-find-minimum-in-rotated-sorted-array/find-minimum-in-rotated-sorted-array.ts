function findMin(nums: number[]): number {
    let output = nums[0]

    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        if (nums[left] <= nums[right]) {
            output = Math.min(output, nums[left])
            break
        }

        const middle = Math.floor((right + left) / 2)
        output = Math.min(output, nums[middle])
        if (nums[middle] >= nums[left]) {
            left = middle + 1
        } else {
            right = middle - 1
        }

    }

    return output
};