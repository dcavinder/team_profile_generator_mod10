//importing employee class
const Employee = require("./Employee")

// create engineer class extends employee
class Engineer extends Employee {
    // properties include gitHub
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    };
    //methods include getGithub() and getRole() which overrides employee class to return 'Engineer'
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getGitHub() {
        return this.gitHub;
    };
    getRole() {
        return 'Engineer'
    };
}
module.exports = Engineer;