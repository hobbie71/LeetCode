function productExceptSelf(nums: number[]): number[] {
    // Create prefix
    const prefix = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        prefix.set(i, (prefix.get(i - 1) ?? 1) * nums[i])
    }

    // Create postfix
    const postfix = new Map<number, number>()

    for (let i = nums.length - 1; i >= 0; i--) {
        postfix.set(i, (postfix.get(i + 1) ?? 1) * nums[i])
    }
    // Create output

    const output: number[] = []

    for (let i = 0; i < nums.length; i++) {
        let product: number

        if (i === 0) {
            product = postfix.get(i + 1)
        } else if (i === nums.length - 1) {
            product = prefix.get(i - 1)
        } else {
            product = postfix.get(i + 1) * prefix.get(i - 1)
        }

        output.push(product)
    }

    return output
};