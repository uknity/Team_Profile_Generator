//packages needed for operation
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const generateManHTML = require("./utils/generateHTML")


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
{
    type: "list",
    name: "addMore",
    message:
      "Would you like to add another employee?",
    choices: ["yes", "no"],
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
        if (internAnswers.addMore === "yes") {
            console.log(internAnswers);
            // const internAnswersHTML = generateHTML(internAnswers);
            employeeTypeFunc();  
        } else if (internAnswers.addMore === "no") {
            console.log(internAnswers);
            // const internAnswersHTML = generateHTML(internAnswers);
        }
        
    })
}

function engineerQuestions() {
    console.log("called engineer questions");
    inquirer.prompt(engineerQues)
    .then((engAnswers) => {
        console.log("these are the eng answers");
        console.log(engAnswers);
        if (engAnswers.addMore === "yes") {
            console.log(engAnswers);
            // const engAnswersHtml = generateHTML(engAnswers);
            employeeTypeFunc();  

        } else if (engAnswers.addMore === "no") {
            console.log(engAnswers);
            // const engAnswersHtml = generateHTML(engAnswers); 
        }
    })
}

//function to begin manager questioning
function managerQues() {
    inquirer.prompt(managerQuestions)

    .then((manAnswers) => {
        if (manAnswers.empPosition === "engineer") {
            console.log(manAnswers);
            let manAnswersObj = {
                length: 0,

                addManAnswers: function addManAnswers(manAnswers) {
                    [].push.call(this, manAnswers)
                }
            }

            manAnswersObj.addManAnswers({})
            console.log(manAnswersObj);
            
            // const manAnswersHtml = generateManHTML(manAnswers);
            engineerQuestions();
    
            
        } else if (manAnswers.empPosition === "intern") {
            console.log(manAnswers);
            // const manAnswersHtml = generateManHTML(manAnswers);
            internQuestions();
        }
            
    })
    
}

//loop function


// function to initialize app - calls managerQuestions function
function init() {
    managerQues()

    
    

    

      
    //   // function writeToFile(fileName, data) {}
    //   fs.writeFile("employeeDirectory.html", htmlContent, (err) =>
    //     err ? console.log(err) : console.log("Successfully created employeeDirectory.html!")
    //   );
    // });
}

// Function call to initialize app
init();
