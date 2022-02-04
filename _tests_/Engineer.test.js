

const Engineer = require('../lib/Engineer');



test('Can get GitHub via constructor arguments', () => {
    const testValue = 'tcampbell01';
    const e = new Engineer ('Fred', 12345, 'fred@gmail.com', testValue);
    expect(e.gitHub).toBe(testValue);
})

test('Can get GitHub username via GitHub()', () => {
    const testValue = 'tcampbell01';
    const e = new Engineer ('Fred', 12345, 'fred@gmail.com', testValue);
    expect(e.gitHub).toBe(testValue);
})



test('getRole() should return \"Engineer\"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('fred@gmail.com', 'tcampbell01', 12345, testValue);
    expect(e.getRole()).toBe(testValue);
});
