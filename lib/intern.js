//importing employee class
const Employee = require("./Employee")
// create intern class extends employee

class Intern extends Employee {
    // properties include school
    constructor(name,id,email,school) {
        Intern.school = school;
    };
    // methods include getSchool() and getRole() which overrides employee class to return 'Intern'
    getName() {
        return Intern.name;
    };
    getId() {
        return Intern.id;
    };
    getEmail() {
        return Intern.email;
    };
    getSchool() {
        return Intern.school;
    };
    getRole() {
        return 'Intern'
    };
}
module.exports = Intern;

