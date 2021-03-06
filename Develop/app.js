const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// 
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
// 
const render = require("./lib/htmlRenderer");

// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);

const baseQuestions = [
    {
        type: "input",
        name: "name",
        message: "Employee's name:"
    },
    {
        type: "input",
        name: "id",
        message: "Employee's ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Employee's email:"
    },
    {
        type: 'list',
        name: 'role',
        message: "Employee's role:",
        choices: [
            'Manager',
            'Engineer',
            "Intern",
        ]
    },
];

// ======================== PROMPT USER ========================= //
let employeesArray = [];

function promptUser(){
    let employee;

    return inquirer.prompt(baseQuestions)
    .then((answers) =>{
        if (answers.role === "Manager") {
            return inquirer.prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Manager's Office Number:"
                }
            ]).then(managerAnswers => {
                employee = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);
            })
        }

        if (answers.role === "Engineer") {
            return inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "Engineer's GitHub Username:"
                }
            ]).then(engineerAnswers => {
                employee = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github);
            })
        }

        if (answers.role === "Intern") {
            return inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "School Intern Attended:"
                }
            ]).then(internAnswers => {
                employee = new Intern(answers.name, answers.id, answers.email, internAnswers.school);
            })
        }


    })
    .then((answers) => {
        return inquirer.prompt([
            {
                type: "list",
                name: "addEmployee",
                message: "Would you like to add another Employee?",
                choices: [
                    "Yes",
                    "No"
                ]
            }
        ])
        .then(answers => {
            employeesArray.push(employee);
            if (answers.addEmployee === "Yes"){
                promptUser();
            }
        })
    })
}

promptUser()
.then(() => {
    fs.writeFile(outputPath, render(employeesArray), (err) => {
        if (err) throw err;
        console.log(`The file has been written to ${outputPath}`);
    })
})

