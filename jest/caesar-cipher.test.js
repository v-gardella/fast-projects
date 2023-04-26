const caesarCipher = require('./caesar-cipher');

test('The string gets shifted', () => {
    expect(caesarCipher('abcde', 1)).toBe('bcdef');
    expect(caesarCipher('uvwxyz', 3)).toBe('xyzabc');
})

test.skip('Shift respects spaces', () => {
    expect(caesarCipher('defend the east wall of the castle', 3)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})

test.skip('Shift respects letter case', () => {
    expect(caesarCipher('Defend The East Wall of the Castle', 3)).toBe('Efgfoe Uif Fbtu Xbmm pg uif Dbtumf');
})