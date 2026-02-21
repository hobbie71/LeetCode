function twoSum(numbers: number[], target: number): number[] {
    let left = 0
    let right = 1

    while (left < numbers.length) {
        const sum = numbers[left] + numbers[right]

        if (sum === target) return [left + 1, right + 1]

        if (sum < target) {
            right++
        } else {
            left++
            right = left + 1
        }
    }
};