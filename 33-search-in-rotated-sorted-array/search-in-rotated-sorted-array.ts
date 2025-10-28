function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const middle = Math.floor((right + left) / 2)

        if (nums[middle] === target) return middle

        if (nums[left] <= nums[middle]) {
            if (nums[middle] < target || target < nums[left]) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        } else {
            if (nums[right] < target || target < nums[middle]) {
                right = middle - 1
            } else {
                left = middle + 1
            } 
        }
    }

    return -1
};