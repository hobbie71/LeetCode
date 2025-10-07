function maxProfit(prices: number[]): number {
    let maxProfit = 0

    let slow = 0
    let fast = 1

    while (fast < prices.length) {
        const buyPrice = prices[slow]
        const sellPrice = prices[fast]

        if (sellPrice < buyPrice) {
            slow = fast
        } else {
            maxProfit = Math.max(sellPrice - buyPrice, maxProfit)
        }

        fast++
    }

    return maxProfit
};