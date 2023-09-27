const fullName = require("./index");

test("fullName Arya + Stark is equal AryaStark", () => {
  expect(fullName(Arya, Stark)).toBe(AryaStark);
});

test("fullName John + Stark is equal JohnStark", () => {
  expect(fullName(John, Stark)).toBe(JohnStark);
});
