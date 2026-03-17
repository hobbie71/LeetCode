function findRepeatedDnaSequences(s: string): string[] {
    if (s.length < 10) return []

    const checkSet: Set<string> = new Set()
    const outputSet: Set<string> = new Set()

    let point = 0

    while (point + 9 < s.length) {
        const str = s.slice(point, point + 10)

        if (checkSet.has(str)) outputSet.add(str)
        checkSet.add(str)

        point++
    }

    return Array.from(outputSet.values())
};