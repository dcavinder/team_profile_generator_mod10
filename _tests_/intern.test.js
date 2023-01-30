// intern tests
const Intern = require('../lib/intern')

describe('Intern class', () => {
    it("getName returns the name for the specified class.", () => {
        const testInternName = 'Samantha';
        const testIntern = new Intern('Samantha',5678, 'sammy@email.com', 'University of Denver');
        expect(testIntern.name).toBe(testInternName);
    });

    it("getId returns the id for the specified class.", () => {
        const testInternId =5678;
        const testIntern = new Intern('Samantha',5678, 'sammy@email.com', 'University of Denver');
        expect(testIntern.id).toBe(testInternId);
    });

    it("getEmail returns the email for the specified class.", () => {
        const testInternEmail = 'sammy@email.com';
        const testIntern = new Intern('Samantha',5678, 'sammy@email.com', 'University of Denver');
        expect(testIntern.email).toBe(testInternEmail);
    });

    it("getSchool returns the school for the specified class.", () => {
        const testInternSchool = 'University of Denver';
        const testIntern = new Intern('Samantha',5678, 'sammy@email.com', 'University of Denver');
        expect(testIntern.school).toBe(testInternSchool);
    });

    it("getRole returns 'Intern'.", () => {
        const testIntern = new Intern('Samantha',5678, 'sammy@email.com', 'University of Denver');
        expect(testIntern.getRole()).toBe('Intern');
    });
});