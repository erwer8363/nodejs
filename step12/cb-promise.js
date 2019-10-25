const fs = require('fs')
const util = require('util')

async function readPkg() {
    const data = await util.promisify(fs.readFile)('../package.json', 'utf8')
    const {name} = JSON.parse(data)
    console.log(name)
}

readPkg()

util.promisify(fs.readFile)('../package.json', 'utf8')
    .then(JSON.parse)
    .then(res => {
        console.log(res.name)
    })