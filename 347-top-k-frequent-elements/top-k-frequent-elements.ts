function topKFrequent(nums: number[], k: number): number[] {
    const count: Record<number, number> = {}

    for (let num of nums) {
        count[num] ? count[num] += 1 : count[num] = 1
    }

    // Create output array
    const output: number[] = []

    const entries = Object.entries(count)
    entries.sort((a, b) => b[1] - a[1])

    for (let i = 0; i < k; i++) {
        output.push(+entries[i][0])
    }

    return output
};