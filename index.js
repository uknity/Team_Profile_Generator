//packages needed for operation
const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template");
//const manager = require("./lib/manager");
//const engineer = require("./lib/engineer");
//const intern = require("./lib/intern");

// const path = require("path");
// const fs = require("fs");
// const OUTPUT_DIR = path.resolve(__dirname, "dist")
// const outputPath = path.join(OUTPUT_DIR, "team.html");


const employeeArray = [];
const managerArray = [];
const engineerArray = [];
const internArray = [];

function createManagerArray(manAnswers) {
    managerArray.push(manAnswers);
    console.log(managerArray);
};
// array of questions for managerial identification
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your team manager?",
  },
  {
    type: "input",
    name: "id",
    message:
      "What is your team manager's employee ID?",
  },
  {
    type: "input",
    name: "email",
    message:
      "What is your team manager's email address?",
  },

  {
    type: "number",
    name: "officeNum",
    message: "What is your team manager's office number?",
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
    name: "name",
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
{
    type: "list",
    name: "addMore",
    message: "Would you like to add another employee?",
    choices: ["yes", "no"],
},  
]
//intern questions
const internQues = [
{
    type: "input",
    name: "name",
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
    name: "school",
    message: "What is the name of your intern's school?",
},
{
    type: "list",
    name: "addMore",
    message:
      "Would you like to add another employee?",
    choices: ["yes", "no"],
},    
]

const employeeType = [
{
    type: "list",
    name: "empPosition",
    message:
        "What employee position would you like to add?",
    choices: ["engineer", "intern"],
    },
];

function employeeTypeFunc() {
    inquirer.prompt(employeeType)
    .then((empTypeAnswer) => {
        if (empTypeAnswer.empPosition === "engineer") {
            engineerQuestions();
        } else if (empTypeAnswer.empPosition === "intern") {
            internQuestions();
        }
    })
}

function internQuestions() {
    inquirer.prompt(internQues)
    .then((internAnswers) => {
        internAnswers.type = "intern";
        employeeArray.push(internAnswers);
        internArray.push(internAnswers);
        console.log(internArray);
        if (internAnswers.addMore === "yes") {
            
            employeeTypeFunc();  
        } else {
            console.log("done with questions");
            // modules.exports = iDoReturnAnArray();
            console.log(managerArray);
            buildTeam();
        }
    })
}

function engineerQuestions() {
    inquirer.prompt(engineerQues)
    .then((engAnswers) => {
        engAnswers.type = "engineer";
        employeeArray.push(engAnswers);
        engineerArray.push(engAnswers);
        console.log(engineerArray);
        if (engAnswers.addMore === "yes") {
            employeeTypeFunc();  

        } else {
            console.log("done with questions");
            // modules.exports = iDoReturnAnArray();
            console.log(managerArray);
            buildTeam();
        }
    }) 
    
}

//function to begin manager questioning
function managerQues() {
    inquirer.prompt(managerQuestions)
    
    .then((manAnswers) => {
        manAnswers.type = "manager";
        createManagerArray(manAnswers);
        employeeArray.push(manAnswers);
        managerArray.push(manAnswers);
        console.log(managerArray);
        if (manAnswers.empPosition === "engineer") {
            engineerQuestions();
                
        } else if (manAnswers.empPosition === "intern") {
        
            internQuestions();
        }
            
    })
    
}

function buildTeam() {
    // Create the output directory if the output path doesn't exist
//     if (!fs.existsSync(OUTPUT_DIR)) {
//       fs.mkdirSync(OUTPUT_DIR)
//     }
//     // 
//     fs.writeFileSync("./dist/index.html", pageTemplate, (err) =>
//         err ? console.log(err) : console.log("Successfully created index.html")
//         );
//   }
console.log(pageTemplate);
 }
  
// function to initialize app - calls managerQuestions function
function runApp() {
    managerQues()
    
}
  // Function call to initialize app
runApp();

// exports.managerArray = managerArray;
exports.managerArray = managerArray;
    
// module.exports = {managerArray};
//   const engineerArray = [];
//   const internArray = [];

    

      
    //   // function writeToFile(fileName, data) {}
    //   fs.writeFile("employeeDirectory.html", htmlContent, (err) =>
    //     err ? console.log(err) : console.log("Successfully created employeeDirectory.html!")
    //   );
    // });


// myArray.js

// modules.exports = iDoReturnAnArray();

  // main.js 
  
