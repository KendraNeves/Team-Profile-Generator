const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        console.log("Engineer");
    }

    getGithub() {
        console.log(`GitHub Username: ${this.github}`);
    }
}

module.exports = Engineer;
