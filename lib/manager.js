// const employArray = require('./employee');
const Employee = require('./employee');
// const managerArray = require('../index');

// const mgrArray = [];
const managerArray = [
    {
      name: 'Liz',
      id: '2',
      email: 'uknity@gmail.com',
      officeNum: 8,
      empPosition: 'engineer',
      type: 'manager'
    },
    {
      name: 'Myrtle',
      id: '4',
      email: 'myrtle@hotmail.com',
      officeNum: 9,
      type: 'manager'
    },
]

console.log(managerArray);

class Manager extends Employee {
    constructor(name, id, email, officeNum, type) {
      super(name, id, email, type);
      this.officeNum = officeNum;
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
    getOfficeNum() {
        return this.officeNum;
    }
    generateMgr() {
      return `<div class="col-sm col-md-3" style="color: white">
      <div class="card">
          <div class="card-header bg-primary p-3">
            <h5 class="card-title p-2"><img src="assets\images\coffee-icon-png-3.png" width="30" height="30" alt="coffee icon" class="align-text-bottom">${this.name}</h5>
            <h6 class="card-subtitle mb-2 p-2">Manager</h6>
          </div>
          <div class="card-body bg-light p-4">
              <ul class="list-group list-group-flush bg-white m-4">
                  <li class="list-group-item my-2">Id: ${this.id}</li>
                  <li class="list-group-item my-2">Email:  <a href="mailto:${this.email}" target="_blank" rel="noopener noreferrer">${this.email}</a></li>
                  <li class="list-group-item my-2">Office Number: ${this.officeNum}</li>
              </ul>
          </div>
      </div>
  </div>` 
    }
}

//if employee.getRole() === 'manager'
for (i=0; i < managerArray.length; i++) {
    // if (managerArray[i].type === 'manager') {
    var newManager = new Manager(managerArray[i].name, managerArray[i].id, managerArray[i].email, managerArray[i].officeNum, managerArray[i].type);
    // mgrArray.push(newManager);
    console.log(newManager.generateMgr());
    }
    
// }
    
// console.log(mgrArray);
module.exports = newManager.generateMgr();