const index = require('../index')

//loop through the employee array to create class 
// employeeArray = [
//     {
//       name: 'Liz',
//       id: '2',
//       email: 'uknity@gmail.com',
//       officeNum: 8,
//       empPosition: 'engineer',
//       type: 'manager'
//     },
//     {
//       name: 'Myrtle',
//       id: '4',
//       email: 'myrtle@hotmail.com',
//       github: 'https://myrtle.github.io',
//       addMore: 'yes',
//       type: 'engineer'
//     },
//     {
//       name: 'Liam',
//       id: '99',
//       email: 'liam@mischief.com',
//       school: 'Mom U',
//       addMore: 'yes',
//       type: 'intern'
//     },
//     {
//       name: 'Julia',
//       id: '38',
//       email: 'juliabirchler@gmail.com',
//       school: 'Liz U',
//       addMore: 'no',
//       type: 'intern'
//     }
//   ]
//   var employArray = []; 
  class Employee {
    
    constructor(name, id, email, type) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.type = type;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.type;
    }
  }

//   for (i=0; i < employeeArray.length; i++) {
    
//     var newEmployee = new Employee(employeeArray[i].name, employeeArray[i].id, employeeArray[i].email, employeeArray[i].type);
//     employArray.push(newEmployee);
//     // console.log(newEmployee);
//   }
// console.log(employArray);

// module.exports = employArray;
module.exports = Employee;