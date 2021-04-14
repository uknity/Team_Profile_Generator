//packages needed for operation
const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// const path = require("path");
// const fs = require("fs");
// const OUTPUT_DIR = path.resolve(__dirname, "dist")
// const outputPath = path.join(OUTPUT_DIR, "team.html");


const employeeArray = [];
const managerArray = [];
const engineerArray = [];
const internArray = [];


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
    type: "input",
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
        if (internAnswers.addMore === "yes") {
            employeeTypeFunc();  
        } else {
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
        if (engAnswers.addMore === "yes") {
            employeeTypeFunc();  

        } else {
            buildTeam();
        }
    }) 
}

//function to begin manager questioning
function managerQues() {
    inquirer.prompt(managerQuestions)
    
    .then((manAnswers) => {
        manAnswers.type = "manager";
        employeeArray.push(manAnswers);
        managerArray.push(manAnswers);
        if (manAnswers.empPosition === "engineer") {
            engineerQuestions();
        } else if (manAnswers.empPosition === "intern") {
            internQuestions();
        }      
    })   
}

function buildTeam() {
 
    const managerAr = [];

    for (let i = 0; i < managerArray.length; i++) {
        managerAr.push(new Manager(managerArray[i].name, managerArray[i].id, managerArray[i].email, managerArray[i].officeNum, ));
    };

    console.log(pageTemplate(managerAr));

    const engineerAr = [];

    for (let i = 0; i < engineerArray.length; i++) {
        engineerAr.push(new Engineer(engineerArray[i].name, engineerArray[i].id, engineerArray[i].email, engineerArray[i].github))
    }

    console.log(pageTemplate(engineerAr));

    const internAr = [];

    for (let i = 0; i < internArray.length; i++) {
        internAr.push(new Intern(internArray[i].name, internArray[i].id, internArray[i].email, internArray[i].school))
    }

    console.log(pageTemplate(internAr));
       // Create the output directory if the output path doesn't exist
//     if (!fs.existsSync(OUTPUT_DIR)) {
//       fs.mkdirSync(OUTPUT_DIR)
//     }
//     // 
//     fs.writeFileSync("./dist/index.html", pageTemplate, (err) =>
//         err ? console.log(err) : console.log("Successfully created index.html")
//         );
//   }

}



// function to initialize app - calls managerQuestions function
function runApp() {
    managerQues()
    
}
  // Function call to initialize app
runApp();

// exports.managerArray = managerArray;
exports.managerArray = managerArray;
exports.engineerArray = engineerArray;
exports.internArray = internArray;
    

    //   // function writeToFile(fileName, data) {}
    //   fs.writeFile("employeeDirectory.html", htmlContent, (err) =>
    //     err ? console.log(err) : console.log("Successfully created employeeDirectory.html!")
    //   );
    // });

  
