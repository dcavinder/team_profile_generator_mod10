// create employee parent class 
class Employee {
    // properties include name, id, email
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    // methods include getName(), getId(), getEmail, getRole() Returns 'Employee'
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return 'Employee'
    };
}
module.exports = Employee;


