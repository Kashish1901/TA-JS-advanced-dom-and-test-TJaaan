const { fullName } = require("./index");

test("fullName Arya + Stark is equal Arya Stark", () => {
  expect(fullName(Arya, Stark)).toBe(AryaStark);
});
