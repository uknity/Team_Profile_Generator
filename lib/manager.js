const Employee = require('./employee');

console.log(employArray);

var mgrArray = [];

class Manager extends Employee {
    constructor(name, id, email, officeNum, type) {
      super(name, id, email, type);
      this.officeNum = officeNum;
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

for (i=0; i < newEmployee.length; i++) {
    var newManager = new Manager(newEmployee[i].name, newEmployee[i].id, newEmployee[i].email, newEmployee[i].officeNum, newEmployee[i].type);
    mgrArray.push(newManager);
    console.log(newManager.generateMgr());
}
    
console.log(mgrArray);
module.exports = generateMgr();