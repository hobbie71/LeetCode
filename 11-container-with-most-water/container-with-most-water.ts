function maxArea(height: number[]): number {
    let maxArea = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]))

        if (height[left] > height[right]) right--
        else left++
    }

    return maxArea
};