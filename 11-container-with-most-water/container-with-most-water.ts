function maxArea(height: number[]): number {
    let maxArea = 0

    let left = 0
    let right = height.length - 1

    while (left < right) {
        const width = right - left
        const area = width * Math.min(height[left], height[right])

        if (area > maxArea) maxArea = area

        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return maxArea
};