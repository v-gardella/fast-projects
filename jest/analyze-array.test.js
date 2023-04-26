const analyzeArray = require('./analyze-array');

test('Returns average', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
    expect(analyzeArray([20, 50, -20, 65, 91, 47, 1, 7]).average).toBe(32.63);
})

test('Returns minimum value', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
    expect(analyzeArray([20, 50, -20, 65, 91, 47, 1, 7]).min).toBe(-20);
})

test('Returns maximum value', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
    expect(analyzeArray([20, 50, -20, 65, 91, 47, 1, 7]).max).toBe(91);
})

test('Returns length', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
    expect(analyzeArray([20, 50, -20, 65, 91, 47, 1, 7]).length).toBe(8);
})