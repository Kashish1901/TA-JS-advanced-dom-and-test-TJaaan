const { fullName } = require("./index");

test("fullName Arya + Stark is equal AryaStark", () => {
  expect(fullName(Arya, Stark)).toBe(AryaStark);
});
