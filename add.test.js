const add = require('./add');

test('1 added to 3 should be 4', () => {
  expect(add(1, 3)).toBe(4);
});
