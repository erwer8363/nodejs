const db = connect('company')

// db.user.find({name: 'jspang'})
// db.user.find(
//     {"skill.skillOne": "html+css"},
//     {name: true, job: true, "skill.skillOne":true,_id: false}
// )
// db.user.find({age:{$gt:30}})
let startDate = new Date('01/01/2018')
let endDate = new Date('01/01/2019')
db.user.find({registerTime: {$lte: startDate, $gte: endDate}})