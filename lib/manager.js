//importing employee class
const Employee = require("./Employee")

// create manager class which extends employee class
class Manager extends Employee {
    // properties include officeNumber
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    // meathods include getRole() which overrides employee class to return 'Manager'
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return 'Manager'
    };

}

module.exports = Manager;



