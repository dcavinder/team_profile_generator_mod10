// employee tests
const Employee = require('../lib/employee')

describe('Employee class', () => {
    it("getName returns the name for the specified class.", () => {
        const testEmplName = 'Danielle';
        const testEmployee = new Employee('Danielle', 1234, 'danielle@email.com');
        expect(testEmployee.name).toBe(testEmplName);
    });

    it("getId returns the id for the specified class.", () => {
        const testEmplId = 1234;
        const testEmployee = new Employee('Danielle', 1234, 'danielle@email.com');
        expect(testEmployee.id).toBe(testEmplId);
    });

    it("getEmail returns the email for the specified class.", () => {
        const testEmplEmail = 'danielle@email.com';
        const testEmployee = new Employee('Danielle', 1234, 'danielle@email.com');
        expect(testEmployee.email).toBe(testEmplEmail);
    });

    it("getRole returns 'Employee'.", () => {
        const testEmployee = new Employee('Danielle', 1234, 'danielle@email.com');
        expect(testEmployee.getRole()).toBe('Employee');
    });
});