const fullName = require("./index");

test('fullname "arya" + "stark" is equal "arya stark"', () => {
  expect(fullName(arya, stark)).toBe(aryastark);
});
