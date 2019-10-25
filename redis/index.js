const redis = require('redis')

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379,
    db: 0
})

client.set('my_redis_class_key', '123456')
client.get('my_redis_class_key', (err, data) => {
    if (err) return
    console.log(data)
})

client.hmset('0015_redis_class_user', {
    username: 'blake',
    upwd: '123456',
    email: '109089787@qq.com'
})
client.hgetall('0015_redis_class_user', (err, data) => {
    if (err) return
    console.log(data)
})
client.hget('0015_redis_class_user', 'username', (err, data) => {
    if (err) return
    console.log(data)
})

client.zadd('00_a', 1000, 'xiaohong')
client.zadd('00_a', 2000, 'xiaohong1')
client.zadd('00_a', 3000, 'xiaohong2')
client.zadd('00_a', 4000, 'xiaohong3')
client.zadd('00_a', 5000, 'xiaohong4')

client.zrange('00_a', 0, 10, (err, data) => {
    if (err) return
    console.log(data)
})

client.on('error', (err) => {
    console.log(err)
})

client.on('end', (data) => {
    console.log(data)
})