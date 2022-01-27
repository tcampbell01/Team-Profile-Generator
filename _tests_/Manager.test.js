
const Manager = require('../lib/Manager');

Test('Can initiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Can get office number via constructor arguments', () => {
    const testValue = '10';
    const e = new Employee ('Fred', 12345, 'fred@gmail.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() shoudl return \"Manager\"', () => {
    const testValue = 'Manager';
    const e = new Employee(testValue);
    expect(e).toBe(testValue);
});







