
const Intern = require('../lib/Intern');



test('Can get school via constructor arguments', () => {
    const testValue = 'UConn';
    const e = new Employee('Fred', 12345, 'fred@gmail.com', testValue);
    expect(e.school).toBe(testValue);
})

test('getRole() should return \"Intern\"', () => {
    const testValue = 'Intern';
    const e = new Employee(testValue);
    expect(e).toBe(testValue);
})


