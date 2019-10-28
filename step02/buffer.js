const logger = require('../utils')
const buff = Buffer.alloc(10)
logger(buff)
const buff1 = Buffer.alloc(10, 'a')
logger(buff1)

const buff2 = Buffer.allocUnsafe(10)
logger(buff2)
logger(buff2.length)

const buff3 = Buffer.from([1, 2, 3, 4, 5])
logger(buff3[2])

const buff4 = Buffer.from('我是一只小小鸟')
logger(buff4)
