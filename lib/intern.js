const Employee = require('./employee');

  class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
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
        return 'Intern';
    }
    getSchool() {
        return this.School;
    }
  }
module.exports = Intern;