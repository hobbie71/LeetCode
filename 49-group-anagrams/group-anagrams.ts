function groupAnagrams(strs: string[]): string[][] {
    const output: string[][] = [[strs[0]]]

    for (let i = 1; i < strs.length; i++) {
        const str = strs[i]
        let grouped = false
        
        for (let j = 0; j < output.length; j++) {
            if (isAnagram(str, output[j][0])) {
                output[j].push(str)
                grouped = true
                break
            }
        }

        if (!grouped) {
            output.push([str])
        }
    }

    return output
};

const isAnagram = (str1: string, str2: string): boolean => {
    if (str1.length !== str2.length) return false

    const count = {}

    for (let char of str1) {
        count[char] ? count[char] += 1 : count[char] = 1
    }

    for (let char of str2) {
        if (!count[char] || count[char] === 0)
            return false

        count[char] -= 1
    }

    return true
}