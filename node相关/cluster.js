/**
 * Created by ever on 2020/2/26.
 */
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cups().length

const rssWarn = (12 * 1024 * 1024)
const heapWarn = (10 * 1024 * 1024)

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    let worker = cluster.fork()
    worker.on('message', (m) => {
      if (m.memory) {
        if (m.memory.rss > rssWarn) {
          console.log(`Worker ${m.process} using too much memory`)
        }
      }
    })
  }
} else {
  http.Server((req, res) => {
    res.writeHead(200)
    res.end('hello world!\n')
  }).listen(8000)
  setInterval(() => {
    process.send({memory: process.memoryUsage(), process: process.pid})
  })
}
