class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
  }

    getName() {
      console.log(this.name);
      return this.name;
    }

    getId() {
      console.log(this.id);
      return this.id;
    }

    getEmail() {
      console.log(this.email);
      return this.email;
    }

    getRole() {
      console.log(`Employee`)
      return "Employee";
    }
}

module.exports = Employee;

// const Betty = new Employee("Betty", 34567, "Betty@gmail.com", "UConn");
// console.log(Betty);
// Betty.getName();
// Betty.getRole();
