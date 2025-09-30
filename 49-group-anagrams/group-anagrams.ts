function groupAnagrams(strs: string[]): string[][] {
    const count: Record<string, string[]> = {}

    for (let str of strs) {
        const key = str.split("").sort().join("")
        count[key] ? count[key].push(str) : count[key] = [str]
    }    

    return Object.values(count)
};