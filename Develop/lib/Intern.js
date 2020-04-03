const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school; 
    }

    getRole() {
        console.log("Intern");
    }

    getSchool () {
        console.log(`School Attended: ${this.school}`);
    }
}

module.exports = Intern;

// const Betty = new Intern("Betty", 34567, "Betty@gmail.com", "UConn");
// console.log(Betty);
// Betty.getRole();
// Betty.getSchool();
