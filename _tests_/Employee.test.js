const Employee = require('../lib/Employee');

test('Can initiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');

});

test('Can set name via constructor arguments', () => {
    const name = 'Fred';
    const e = new Employee(name);
    expect(e.name).toBe(name);
} );

test('Can set id via constructor arguments', () => {
    const testValue = 12345;
    const e = new Employee('Fred', testValue);
    expect(e.id).toBe(testValue);
} );

test('Can set email via constructor arguments', () => {
    const testValue = 'fred@gmail.com';
    const e = new Employee('Fred', 12345, testValue);
    expect(e.email).toBe(testValue);
} );

// start here 

test('Can get name via getName()', () => {
    const testValue = 'Fred';
    const e = new Employee(testValue);
    expect(e.name).toBe(testValue);
} );

test('Can get id via getId()', () => {
    const testValue = 12345;
    const e = new Employee('Fred', testValue);
    expect(e.id).toBe(testValue);
} );

test('Can get email from getEmail()', () => {
    const testValue = 'fred@gmail.com';
    const e = new Employee('Fred', 12345, testValue);
    expect(e.email).toBe(testValue);
} );

test('getRole() should return \"Employee\"', () => {
    const testValue = 'Employee';
    const e = new Employee(testValue);
    expect(e.getRole()).toBe(testValue);
} );





