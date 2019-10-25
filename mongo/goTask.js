let userName = 'jspang2'
let timeStamp = Date.parse(new Date())
let jsonData = {"loginName": userName, "loginTime": timeStamp}
let db = connect('log')
db.login.insert(jsonData)

print('[demo]:log print success')