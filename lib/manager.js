const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
      super(name, id, email);
    //   this.officeNum = officeNum;
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
        return "Manager";
    }
    getOfficeNum() {
        return this.officeNum;
    }
    
}

module.exports = Manager;
