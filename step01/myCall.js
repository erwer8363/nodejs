function Jim() {
    this.name = 'Jim'
}

function speak(str) {
    console.log(this.name, ' say somethings, the things is ', str)
}


Function.prototype.myCall = function (context) {
    context = context || global //做一个多场景适配，当myCall函数没有接收到参数时，context对应的是window对象

    var args = [] //创建一个空数组，用于接收形参。
    context.fn = this //绑定this，这里的this代表的就是上下文中的say函数。

    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    } //for循环将参数添加到args数组，循环从1开始是因为第0位是foo对象，并非我们需要的参数

    context.fn(...args) //执行函数，并将args数组作为rest参数传入
    delete context.fn
}

let name = 'lilei'
speak.myCall(Jim, 'tomorrow is sunday')
speak.myCall(null, 'hello everyone')