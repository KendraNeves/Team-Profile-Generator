const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    console.log("Manager");
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;


// const Jon = new Manager("Jon", 12345, "random@SpeechGrammarList.com", 123456);
// console.log(Jon);