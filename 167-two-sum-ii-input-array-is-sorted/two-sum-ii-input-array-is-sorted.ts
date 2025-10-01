function twoSum(numbers: number[], target: number): number[] {
    /**
     * Options: 
     * Two Pointer opposite ends
     * Brute Force
     */

    let left = 0, right = numbers.length - 1

    while (left < right) {
        const total = numbers[left] + numbers[right]

        if (total > target) right--
        else if (total < target) left++
        else return [left + 1, right + 1]
    }
};