const capitalize = require('./capitalize');

test('The first letter is capitalized', () => {
    expect(capitalize('look at this amazing string')).toBe('Look at this amazing string');
})

test('The returned value is a string', () => {
    expect(typeof capitalize('this is a test')).toBe('string')
});