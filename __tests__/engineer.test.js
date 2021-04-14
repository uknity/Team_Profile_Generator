const engineerArray = require('../index');
const Employee = require('../lib/employee');

describe("takes in the engineer array and Employee class and adds it to a subclass Engineer", () => {
    it("should take in the engineer array", () => {
        const engineerArray = [
                {
                  name: 'Liz',
                  id: '2',
                  email: 'uknity@gmail.com',
                  officeNum: 8,
                  empPosition: 'engineer',
                  type: 'engineer'
                },
                {
                  name: 'Myrtle',
                  id: '4',
                  email: 'myrtle@hotmail.com',
                  github: 'https://myrtle.github.io',
                  addMore: 'yes',
                  type: 'engineer'
                },
                {
                  name: 'Liam',
                  id: '99',
                  email: 'liam@mischief.com',
                  school: 'Mom U',
                  addMore: 'yes',
                  type: 'engineer'
                },
                {
                  name: 'Julia',
                  id: '38',
                  email: 'juliabirchler@gmail.com',
                  school: 'Liz U',
                  addMore: 'no',
                  type: 'engineer'
                }
              ];
        expect(engineerArray.length === 4).toEqual(true);
    });
    it("should loop through the engineer array and add each engineer as a new Engineer", () => {
        const engineerArray = [
            {
              name: 'Liz',
              id: '2',
              email: 'uknity@gmail.com',
              officeNum: 8,
              empPosition: 'engineer',
              type: 'engineer'
            },
            {
              name: 'Myrtle',
              id: '4',
              email: 'myrtle@hotmail.com',
              github: 'https://myrtle.github.io',
              addMore: 'yes',
              type: 'engineer'
            },
            {
              name: 'Liam',
              id: '99',
              email: 'liam@mischief.com',
              school: 'Mom U',
              addMore: 'yes',
              type: 'engineer'
            },
            {
              name: 'Julia',
              id: '38',
              email: 'juliabirchler@gmail.com',
              school: 'Liz U',
              addMore: 'no',
              type: 'engineer'
            }
          ];

          for (i=0; i < engineerArray.length; i++) {
            var newEngineer = new Engineer(engineerArray[i].name, engineerArray[i].id, engineerArray[i].email, engineerArray[i].type);
            console.log(newEmployee);
          }
    expect(employeeArray[0].name = 'Liz');
    });

}
