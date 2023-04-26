const caesarCipher = require('./caesar-cipher');

test('The string gets shifted', () => {
    expect(caesarCipher('abcde', 1)).toBe('bcdef');
    expect(caesarCipher('uvwxyz', 3)).toBe('xyzabc');
})

test('Shift respects spaces', () => {
    expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
    expect(caesarCipher('defend the east wall of the castle', 5)).toBe('ijkjsi ymj jfxy bfqq tk ymj hfxyqj');
})

test('Shift respects special characters', () => {
    expect(caesarCipher('say "hello!" to the army', 1)).toBe('tbz "ifmmp!" up uif bsnz');
    expect(caesarCipher('let us never split <3', 4)).toBe('pix yw riziv wtpmx <3');
})

test.skip('Shift respects letter case', () => {
    expect(caesarCipher('Defend The East Wall of the Castle', 3)).toBe('Efgfoe Uif Fbtu Xbmm pg uif Dbtumf');
})