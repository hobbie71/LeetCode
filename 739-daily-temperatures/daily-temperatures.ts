function dailyTemperatures(temperatures: number[]): number[] {
    const answer: number[] = new Array(temperatures.length).fill(0)
    const stack: number[] = []

    for (let i = 0; i < temperatures.length; i++) {
        // While stack has items && temperatures top of stack < current temperatures
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop()
            answer[index] = i - index
        }

        stack.push(i)
    }

    return answer
};