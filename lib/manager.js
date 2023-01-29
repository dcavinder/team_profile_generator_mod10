//importing employee class
const Employee = require("./Employee")

// create manager class which extends employee class
class Manager extends Employee {
    // properties include officeNumber
    constructor(name, id, eail, officeNumber) {
        Manager.name =name;
        Manager.id = id;
        Manager.email = email;
        Manager.officeNumber = officeNumber;
    };
    // meathods include getRole() which overrides employee class to return 'Manager'
    getName() {
        return Manager.name;
    };
    getId() {
        return Manager.id;
    };
    getEmail() {
        return Manager.email;
    };
    getOfficeNumber() {
        return Manager.officeNumber;
    };
    getRole() {
        return 'Manager'
    };

}

module.exports = Manager;



