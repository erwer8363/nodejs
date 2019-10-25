function PriorityQueue() {

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.items = []

    PriorityQueue.prototype.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority)

        if (this.items.length === 0) {
            this.items.push(queueElement)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) {
                this.items.push(queueElement)
            }
        }
    }
    // 从队列中删除前端元素
    PriorityQueue.prototype.dequeue = function () {
        return this.items.shift()
    }
    // 查看前端的元素
    PriorityQueue.prototype.front = function () {
        return this.items[0]
    }
    // 查看元素是否为空
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    // 查看队列中元素的个数
    PriorityQueue.prototype.size = function () {
        return this.items.length
    }
    // toString方法
    PriorityQueue.prototype.toString = function () {
        let resultStr = ''
        for (let i = 0; i < this.items.length; i++) {
            resultStr += this.items[i].element + ':' + this.items[i].priority + ' '
        }
        return resultStr
    }
}

module.exports = PriorityQueue