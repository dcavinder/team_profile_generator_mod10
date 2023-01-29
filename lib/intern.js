//importing employee class
const Employee = require("./Employee")
// create intern class extends employee

class Intern extends Employee {
    // properties include school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    // methods include getSchool() and getRole() which overrides employee class to return 'Intern'
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern'
    };
}
module.exports = Intern;

