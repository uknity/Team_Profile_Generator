//packages needed for operation
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");

// array of questions for managerial identification
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message:
      "What is your employee ID?",
  },
  {
    type: "input",
    name: "email",
    message:
      "What is your email address?",
  },

  {
    type: "number",
    name: "officeNum",
    message: "What is your office number?",
  },
  {
    type: "list",
    name: "empPosition",
    message:
      "What employee position would you like to add?",
    choices: ["engineer", "intern"],
  },
];

const engineerQues = [
{
    type: "input",
    name: "engName",
    message: "What is your engineer's name?",
},
{
    type: "input",
    name: "id",
    message: "What is your engineer's employee ID?",
},
{
    type: "input",
    name: "email",
    message: "What is your engineer's email address?",
},
{
    type: "input",
    name: "github",
    message: "What is your engineer's GitHub profile web address?",
},
]
//intern questions
const internQues = [
{
    type: "input",
    name: "intName",
    message: "What is your intern's name?",
},
{
    type: "input",
    name: "id",
    message: "What is your intern's employee ID?",
},
{
    type: "input",
    name: "email",
    message: "What is your intern's email address?",
},
{
    type: "input",
    name: "github",
    message: "What is the name of your intern's school?",
},   
]

//function to begin manager questioning
function managerQues() {
    inquirer.prompt(managerQuestions).then((answers) => {
        if (answers.empPosition === "engineer") {
            inquirer.prompt(engineerQues)
        }
    })
}

// function to initialize app
function init() {
    managerQuestions();
    

    // function to write html file
    .then((data) => {
      const htmlContent = generateHTML(data);

      
      // function writeToFile(fileName, data) {}
      fs.writeFile("employeeDirectory.html", htmlContent, (err) =>
        err ? console.log(err) : console.log("Successfully created employeeDirectory.html!")
      );
    });
}

// Function call to initialize app
init();
