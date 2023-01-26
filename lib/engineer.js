//importing employee class
const Employee = require("./Employee")

// create engineer class extends employee class
class Engineer extends Employee {
    // properties in clude github
    constuctor (name, id, email, gitHub) {
        Engineer.name = name;
        Engineer.id = id;
        Engineer.email = email;
        Engineer.gitHub = gitHub;
    };
    //methods include getGithub() and getRole() which overrides employee class to return 'Engineer'
    getName() {
        return Engineer.name;
    };
    getId() {
        return Engineer.id;
    };
    getEmail() {
        return Engineer.email;
    };
    getGithub() {
        return Engineer.gitHub;
    };
    getRole() {
        return 'Engineer'
    };
}
module.eports = Engineer;
