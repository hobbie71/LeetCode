function isValid(s: string): boolean {
    const stack: string[] = []
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        const oppositeChar = brackets[char]
        if (oppositeChar) {
            stack.push(oppositeChar)
        } else {
            if (stack.pop() !== char) return false
        }
    }

    return stack.length === 0
};