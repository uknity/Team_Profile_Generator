//packages needed for operation
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// const generateHTML = require("./utils/generateHTML");
// const generateManHTML = require("./utils/generateHTML")
// const OUTPUT_DIR = path.resolve(__dirname, "dist")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// const pageTemplate = require("./src/page-template")

const employeeArray = [];

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
        console.log(employeeArray)
        if (internAnswers.addMore === "yes") {
            
            employeeTypeFunc();  
        } 
        // else if (internAnswers.addMore === "no") {
            
        // }    
    })
}

function engineerQuestions() {
    inquirer.prompt(engineerQues)
    .then((engAnswers) => {
        engAnswers.type = "engineer";
        employeeArray.push(engAnswers)
        console.log(employeeArray);
        if (engAnswers.addMore === "yes") {
            employeeTypeFunc();  

        } 
        // else if (engAnswers.addMore === "no") {
            
        // }
    })
}

//function to begin manager questioning
function managerQues() {
    inquirer.prompt(managerQuestions)
    
    .then((manAnswers) => {
        manAnswers.type = "manager";
        employeeArray.push(manAnswers)
        console.log(employeeArray);
        if (manAnswers.empPosition === "engineer") {
            engineerQuestions();
                
        } else if (manAnswers.empPosition === "intern") {
        
            internQuestions();
        }
            
    })
    
}

// function to initialize app - calls managerQuestions function
function runApp() {
    managerQues()

    // function buildTeam() {
    //   // Create the output directory if the output path doesn't exist
    //   if (!fs.existsSync(OUTPUT_DIR)) {
    //     fs.mkdirSync(OUTPUT_DIR)
    //   }
    //   fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    // }
  }
  // Function call to initialize app
  runApp();



    
    

    

      
    //   // function writeToFile(fileName, data) {}
    //   fs.writeFile("employeeDirectory.html", htmlContent, (err) =>
    //     err ? console.log(err) : console.log("Successfully created employeeDirectory.html!")
    //   );
    // });




