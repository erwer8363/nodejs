/**
 * Created by ever on 2020/2/23.
 */
const net = require('net')
const chatServer = net.createServer()
const clientList = []

chatServer.on('connection', (client) => {
  client.name = client.remoteAddress + ' : ' + client.remotePort
  client.write('HI ' + client.name + ' !\n')
  clientList.push(client)
  client.on('data', (data) => {
    broadcast(data, client)
  })
  client.on('end', () => {
    clientList.splice(clientList.indexOf(client), 1)
  })
})

function broadcast(message, client) {
  let cleanup = []
  clientList.filter(item => item !== client).forEach(client => {
    if (client.writable) {
      client.write(`${client.name} says ${message}`)
    } else {
      cleanup.push(client)
      client.destroy()
    }
  })

  cleanup.forEach(client => {
    clientList.splice(clientList.indexOf(client), 1)
  })

}


chatServer.listen(9000, () => {
  console.log('Server running on the port 9000')
})
