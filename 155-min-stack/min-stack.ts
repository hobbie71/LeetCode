class MinStack {
    private array: number[]

    constructor() {
        this.array = []
    }

    push(val: number): void {
        this.array.push(val)
    }

    pop(): void {
        this.array.pop()
    }

    top(): number {
        return this.array[this.array.length - 1]
    }

    getMin(): number {
        return Math.min(...this.array)
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */