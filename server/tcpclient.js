const net = require('net')
const netpkg = require('./netpkg')

const sock = net.connect({
    port: 6080,
    host: 'localhost'
}, () => {
    console.log('connect to server')
})
sock.on('connect', () => {
    console.log('connected successful')
    sock.write(netpkg.package_data('Hello,world!'))
    // sock.write(netpkg.test_pkg_two_action('Hello 世界!', 'Hello manila'))
})
sock.on('error', (e) => {

})
sock.on('data', (e) => {
    console.log('data', e)
})
sock.on('end', () => {
    console.log('end')
})
sock.on('close', () => {
    console.log('close')
})
