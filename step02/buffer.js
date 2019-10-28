const logger = require('../utils')
const buff = Buffer.alloc(10)
logger(buff)
const buff1 = Buffer.alloc(10, 'a')
logger(buff1)

const buff2 = Buffer.allocUnsafe(10)
logger(buff2)
