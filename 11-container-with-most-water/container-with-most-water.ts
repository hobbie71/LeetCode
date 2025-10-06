function maxArea(height: number[]): number {
    let maxArea = 0

    let left = 0
    let right = height.length - 1

    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right])
        maxArea = Math.max(area, maxArea)

        if (height[left] > height[right]) right--
        else left++
    }

    return maxArea
};