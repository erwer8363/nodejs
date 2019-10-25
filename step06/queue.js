function Queue() {
    this.items = []

    // 将元素加入到队列
    Queue.prototype.enqueue = function (element) {
        this.items.push(element)
    }
    // 从队列中删除前端元素
    Queue.prototype.dequeue = function () {
        return this.items.shift()
    }
    // 查看前端的元素
    Queue.prototype.front = function () {
        return this.items[0]
    }
    // 查看元素是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    // 查看队列中元素的个数
    Queue.prototype.size = function () {
        return this.items.length
    }
    // toString方法
    Queue.prototype.toString = function () {
        let resultStr = ''
        for (let i = 0; i < this.items.length; i++) {
            resultStr += this.items[i] + ' '
        }
        return resultStr
    }
    // 返回最后一个元素
    //
}

module.exports = Queue