function* makeGenerator(arr) {
    yield arr[0]
    yield arr[1]
    yield arr[2]
    yield arr[3]
}

let gen = makeGenerator(['chifan','shuijiao','dadoudou','shangxue'])
console.log(gen.next())