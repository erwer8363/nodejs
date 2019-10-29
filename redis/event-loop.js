process.nextTick(() => {
    console.log('[阶段切换.... nextTick')  // 1
})
setImmediate(() => console.log('[阶段3 immediate 回调1]')) // 8
setImmediate(() => console.log('[阶段3 immediate 回调]2')) // 9
setImmediate(() => console.log('[阶段3 immediate 回调]3')) // 10

setTimeout(() => {
    console.log('[阶段1 定时器] 定时器 回调2]') // 4
    Promise.resolve().then(() => {
        console.log('[阶段2 Promise 回调4') // 6
    })
    process.nextTick(() => {
        console.log('[待切入下一个阶段') // 5
    })
}, 0)
Promise.resolve().then(() => {
    console.log('[阶段2 Promise 回调5')  // 2
    process.nextTick(() => {
        console.log('[...阶段切换 nextTick 回调6') // 3
    })
    setImmediate(() => console.log('[阶段2 immediate 回调]7')) // 11
})
setTimeout(() => console.log(('[阶段1 定时器] 回调3')), 0) // 7


// setImmediate() 被设计在poll阶段后立即执行回调 且只在check阶段执行回调
// setTimeout() 被设计在指定下线到达后执行回调
// process.nextTick() 立即在本阶段执行回调
