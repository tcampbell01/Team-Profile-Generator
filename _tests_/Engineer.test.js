

const Engineer = require('../lib/Engineer');



test('Can get GitHub via constructor arguments', () => {
    const testValue = 'tcampbell01';
    const e = new Employee ('Fred', 12345, 'fred@gmail.com', testValue);
    expect(e.gitHub).toBe(testValue);
})

test('getRole() should return \"Engineer\"', () => {
    const testValue = 'Engineer';
    const e = new Employee(testValue);
    expect(e).toBe(testValue);
});
