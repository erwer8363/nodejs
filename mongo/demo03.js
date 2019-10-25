let db = connect('company')

// let workmate5 = {
// //     name: 'lili',
// //     age: 20,
// //     sex: 1,
// //     job: '后端',
// //     skill: {
// //         skillOne: 'html+css',
// //         skillTwo: 'JavaScript',
// //         skillThree: 'koa'
// //     },
// //     registerTime: new Date()
// // }
// //
// // db.user.update({"name": "lili"}, workmate5)

// $set 用法
// db.user.update({"name": "lili"}, {"$set": {sex: 0, age: 18}})
// db.user.update({name:'lili'}, {$set:{'skill.skillThree': 'word'}})

// $unset用法
// db.user.update({name: 'lili'}, {$unset: {sex: '100'}})
// $inc 用法
// db.user.update({name: 'lili'}, {$inc: {age: +2}})
// multi
// db.user.update({}, {$set: {interest: []}}, {multi: true})

// upsert
// db.user.update({name: 'xiaohong'}, {name: 'xiaohong', age: 20}, {upsert: true})
// db.user.update({name: 'xiaowang'}, {$set: {name:'xiaowang'}})
//$push
// db.user.update({name: 'xiaohong'}, {$push: {interest: 'singing'}})
// db.user.update({name: 'xiaohong'}, {$set:{interest: []}})

// $addToSet
// db.user.update({name: 'xiaohong'}, {$addToSet:{interest: 'readBook'}})
 // $each
// let interests = ['walking', 'seating', 'running']
// db.user.update({name: 'xiaohong'}, {$addToSet:{interest:{$each: interests}}})
// $pop 1 从末位删除, -1从开头删除
// db.user.update({name:'xiaohong'}, {$pop:{interest: 1}})
// 数组定位修改
db.user.update({name: 'xiaohong'}, {$set:{"interest.2": "coding"}})













print('[demo] update success')