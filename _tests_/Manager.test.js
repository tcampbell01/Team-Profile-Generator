
const Manager = require('../lib/Manager');



test('Can get office number via constructor arguments', () => {
    const testValue = '10';
    const e = new Manager ('Fred', 12345, 'fred@gmail.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return \"Manager\"', () => {
    const testValue = 'Manager';
    const e = new Manager(testValue);
    expect(e.getRole()).toBe(testValue);
});







