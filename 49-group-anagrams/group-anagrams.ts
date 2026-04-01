function groupAnagrams(strs: string[]): string[][] {
    const hash: Map<string, string[]> = new Map();

    for (const str of strs) {
        const sorted: string = str.split("").sort().join();

        if (!hash.has(sorted)) {
            hash.set(sorted, []);
        }

        hash.get(sorted)!.push(str);
    }

    return [...hash.values()];
};