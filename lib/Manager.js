const Employee = require("./Employee");

class Manager extends Employee {
  constructor() {
    const role = "Manager";

    super(role);

    this.officeNumber = "";
    this.genQuestions = {
      type: "input",
      message: `What is the Manager's office Number?`,
      name: "officeNumber",
    };
  }
}

module.exports = Manager;
