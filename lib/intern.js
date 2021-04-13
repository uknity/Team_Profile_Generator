const Employee = require('./employee');

  class Intern extends Employee {
    constructor(name, id, email, school, type) {
        super(name, id, email, type);
        this.school = school;
      }
      generateIntern() {
        return `<div class="col-sm col-md-3" style="color: white">
        <div class="card">
            <div class="card-header bg-primary p-3">
              <h5 class="card-title p-2"><img src="assets/images/glasses3.png" width="30" height="30" alt="glasses icon" class="align-text-bottom">${this.name}</h5>
              <h6 class="card-subtitle mb-2 p-2">Intern</h6>
            </div>
            <div class="card-body bg-light p-4">
                <ul class="list-group list-group-flush bg-white m-4">
                    <li class="list-group-item my-2">Id: ${this.id}</li>
                    <li class="list-group-item my-2">Email:  <a href="mailto:${this.email}" target="_blank" rel="noopener noreferrer">${this.email}</a></li>
                    <li class="list-group-item my-2">School: ${this.school}</li>
                </ul>
            </div>
        </div>
    </div>`
    }
  }

  module.exports = generateIntern();