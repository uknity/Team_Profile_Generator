const Employee = require('./employee');
// const managerArray = require('../index');

const engineerArray = [
    {
      name: 'Myrtle',
      id: '4',
      email: 'myrtle@hotmail.com',
      github: 'https://myrtle.github.io',
      addMore: 'yes',
      type: 'engineer'
    },
    {
        name: 'Mabel',
        id: '6',
        email: 'mabel@hotmail.com',
        github: 'https://mabel.github.io',
        addMore: 'yes',
        type: 'engineer'
      },
  ]
class Engineer extends Employee {
    constructor(name, id, email, github, type) {
        super(name, id, email, type);
        this.github = github;
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
    getGitHub() {
        return this.github;
    }
    generateEngineer() {
          return `<div class="col-sm col-md-3" style="color: white">
          <div class="card">
              <div class="card-header bg-primary p-3">
                <h5 class="card-title p-2"><img src="..assets/images/glasses3.png" width="30" height="30" alt="glasses icon" class="align-text-bottom">${this.name}</h5>
                <h6 class="card-subtitle mb-2 p-2">Engineer</h6>
              </div>
              <div class="card-body bg-light p-4">
                  <ul class="list-group list-group-flush bg-white m-4">
                      <li class="list-group-item my-2">Id: ${this.id}</li>
                      <li class="list-group-item my-2">Email:  <a href="mailto:${this.email}" target="_blank" rel="noopener noreferrer">${this.email}</a></li>
                      <li class="list-group-item my-2">Github: <a href="${this.github}" target="_blank" class="card-link">${this.github}</a></li>
                  </ul>
              </div>
          </div>
      </div>`
      }
  }

  for (i=0; i < engineerArray.length; i++) {
    // if (managerArray[i].type === 'manager') {
    var newEngineer = new Engineer(engineerArray[i].name, engineerArray[i].id, engineerArray[i].email, engineerArray[i].github, engineerArray[i].type);
    // mgrArray.push(newManager);
    console.log(newEngineer.generateEngineer());
    }

  module.exports = newEngineer.generateEngineer();