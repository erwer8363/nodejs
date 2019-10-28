const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
}
const deepClone = require('../deepClone')
test('target equals cloneTarget', () => {
    expect(deepClone(target)).toStrictEqual(target)
})