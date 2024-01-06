const divide = require('./divide');

test('1 divide 2 should be 0.5', () => {
  expect(divide(1, 2)).toBe(0.5);
}); //.toBe method....

test('4 divide 2 should be 2', () => {
  expect(divide(4, 2)).toBe(2);
});

test('any number divided by 0 should be an error', () => {
  expect(() => divide(96, 0)).toThrow(); //throw bada tym leta hai toh ham callback func main use krenge....
});
