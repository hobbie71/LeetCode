function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const counter = {}

    for (let char of s) {
        counter[char] = counter[char] ? counter[char] += 1 : 1
    }

    for (let char of t) {
        if (!counter[char] || counter[char] === 0) {
            return false
        }

        counter[char] -= 1
    }

    return true
};