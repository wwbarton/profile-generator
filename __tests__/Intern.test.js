const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  it("getRole cb Intern", () => {
    const testFunction = new Intern().role;
    const testAnswer = "Intern";
    expect(testFunction).toBe(testAnswer);
  });
});
