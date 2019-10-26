const myInstanceof = require('../instanceof')
test('111 is a String', () => {
  expect(myInstanceof(111, 'String')).toBe(false)
})