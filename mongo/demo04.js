let db = connect('company')
// db.user.update({sex: 1}, {$set:{money: 1000}},false, true)
// let resultMsg = db.runCommand({getLastError: 1})
// printjson(resultMsg)

let myModify = {
    findAndModify: 'user',
    query: {name: 'jspang'},
    update: {$set:{age: 28}},
    new: true
}
let resultMsg = db.runCommand(myModify)
printjson(resultMsg)