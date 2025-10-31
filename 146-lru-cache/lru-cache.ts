class LRUCache {
    cache: number[]
    cacheMap: Map<number, number>
    capacity: number

    constructor(capacity: number) {
        this.cache = []
        this.cacheMap = new Map()
        this.capacity = capacity
    }

    get(key: number): number {
        if (this.cacheMap.has(key)) {
            const index = this.cache.indexOf(key)

            this.cache.splice(index, 1)
            this.cache.unshift(key)
            return this.cacheMap.get(key)
        }

        return -1
    }

    put(key: number, value: number): void {
        if (this.cacheMap.has(key)) {
            this.cacheMap.set(key, value)

            const index = this.cache.indexOf(key)
            this.cache.splice(index, 1)
            this.cache.unshift(key)
        } else {
            if (this.cache.length === this.capacity) {
                const deleteKey = this.cache.pop()
                this.cacheMap.delete(deleteKey)
            }

            this.cache.unshift(key)
            this.cacheMap.set(key, value)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */