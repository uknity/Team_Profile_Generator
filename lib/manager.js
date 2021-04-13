const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, type, id, email, officeNo) {
        this.name = name;
        this.type = "manager";
        this.email = email;
        this.officeNo = officeNo;
    }
}
// const manager = [];

// function generateManHTML(manAnswers) {
//     console.log(manAnswers);
// }

// function generateHTML() {

// }

// module.exports = generateHTML;