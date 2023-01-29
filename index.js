const fs = require('fs')
const inquirer = require('inquirer')
const htmlGenerator = require('./lib/html_generator')

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

let employees = [];

function managerPrompt() {
    inquirer
        .prompt([{
            type: 'input',
            name: "name",
            message: "Manager's Name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager's ID: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email: "
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's Office Number: "
        }
        ])
        .then((managerResponse => {
            let newIntern = new Intern(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.officeNumber);
            employees.push(newManager);
        }))
}
function engineerPrompt() {
    inquirer
        .prompt([{
            type: 'input',
            name: "name",
            message: "Engineer's Name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Engineer's ID: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Engineer's E-Mail: "
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Engineer's GitHub: "
        }
        ])
        .then((engineerResponse => {
            let newEngineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.gitHub);
            employees.push(newEngineer);      
        }))
}
function internPrompt() {
    inquirer
        .prompt([{
            type: 'input',
            name: "name",
            message: "Intern's Name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Intern's ID: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Intern's E-Mail: "
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's School: "
        }
        ])
        .then((internResponse => {
            let newIntern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);
            employees.push(newIntern);
        }))
}
