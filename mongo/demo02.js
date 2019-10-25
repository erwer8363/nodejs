let workmate1 = {
    name: 'jspang',
    age: 20,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'html+css',
        skillTwo: 'JavaScript',
        skillThree: 'php'
    },
    registerTime: new Date()
}
let workmate2 = {
    name: 'lilei',
    age: 20,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'html+css',
        skillTwo: 'JavaScript',
        skillThree: 'php'
    },
    registerTime: new Date()
}
let workmate3 = {
    name: 'hanmeimei',
    age: 20,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'html+css',
        skillTwo: 'JavaScript',
        skillThree: 'php'
    },
    registerTime: new Date()
}
let workmate4 = {
    name: 'lucy',
    age: 20,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'html+css',
        skillTwo: 'JavaScript',
        skillThree: 'php'
    },
    registerTime: new Date()
}
let workmate5 = {
    name: 'lili',
    age: 20,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'html+css',
        skillTwo: 'JavaScript',
        skillThree: 'php'
    },
    registerTime: new Date()
}

let db = connect('company')
db.user.insert([workmate1, workmate2, workmate3, workmate4, workmate5])
print('[demo] insert success')