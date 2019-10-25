const {clone, clone2, clone3} = require('./deepClone')

const obj = clone({
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
})
console.log(obj)

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {}}}}}}}}}}}},
};

target.target = target;

console.time();
const result = clone2(target);
console.timeEnd();

console.time();
const result2 = clone3(target);
console.timeEnd();


