const reverseString = require('./reverse-string');

test('The function returns a reversed string', () => {
    expect(reverseString('watermelon')).toBe('nolemretaw')
});

test('Reversed string respects spaces', () => {
    expect(reverseString('Look, a string')).toBe('gnirts a ,kooL')
})

test('Function respects special characters', () => {
    expect(reverseString('Hello! World?')).toBe('?dlroW !olleH')
})

test('Reversed string respects upper, lower and propercase', () => {
    expect(reverseString('this one is in lowecase')).toBe('esacewol ni si eno siht');
    expect(reverseString('This One Is In Propercase')).toBe('esacreporP nI sI enO sihT');
    expect(reverseString('THIS ONE IS IN UPPERCASE')).toBe('ESACREPPU NI SI ENO SIHT');
})