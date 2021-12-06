const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  it("getRole cb Manager", () => {
    const testFunction = new Manager().role;
    const testAnswer = "Manager";
    expect(testFunction).toBe(testAnswer);
  });
});
