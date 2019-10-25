let obj = {
    start: [1, 2, 3, 4, 5],
    end: [6, 7, 8, 9, 10],
    [Symbol.iterator]() {
        let index = 0
        let arr = [...this.start, ...this.end]
        let len = arr.length
        return {
            next() {
                if (index < len) {
                    return {
                        value: arr[index++],
                        done: false
                    }
                } else {
                    return {
                        value: arr[index++],
                        done: true
                    }
                }
            }
        }
    }
}

for (let key of obj) {
    console.log(key)
}