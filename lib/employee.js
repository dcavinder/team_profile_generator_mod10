// create employee parent class 
class Employee {
    // properties include name, id, email
    constructor (name, id, email) {
        Employee.name = name;
        Employee.id = id;
        Employee.email = email;
    };
    // methods include getName(), getId(), getEmail, getRole() Returns 'Employee'
    getName() {
        return Employee.name;
    };
    getId() {
        return Employee.id;
    };
    getEmail() {
        return Employee.email;
    };
    getRole() {
        return 'Employee'
    };
}
module.exports = Employee;


