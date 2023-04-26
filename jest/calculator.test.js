const calculator = require('./calculator')

// Add

test('Add two numbers', () => {
    let calculate = new calculator();
    expect(calculate.add(1, 2)).toBe(3);
    expect(calculate.add(10, 20)).toBe(30);
    expect(calculate.add(-10, -25)).toBe(-35);
    expect(calculate.add(0, 25)).toBe(25);
    expect(calculate.add(5839, 1038)).toBe(6877);
})

test('Add decimal numbers', () => {
    let calculate = new calculator();
    expect(calculate.add(5, 2.33)).toBe(7.33)
    expect(calculate.add(1, 1.5)).toBe(2.50);
    expect(calculate.add(2.5, 2.5)).toBe(5);
})

test('Add positive and negative numbers', () => {
    let calculate = new calculator();
    expect(calculate.add(-1, 1)).toBe(0);
    expect(calculate.add(-10, 15)).toBe(5);
    expect(calculate.add(-10, 5)).toBe(-5);
})

// Substract

test('Substract two numbers', () => {
    let calculate = new calculator();
    expect(calculate.substract(2, 1)).toBe(1);
    expect(calculate.substract(20, 10)).toBe(10);
    expect(calculate.substract(-10, -25)).toBe(15);
    expect(calculate.substract(0, 10)).toBe(-10);
    expect(calculate.substract(7384, 3084)).toBe(4300);
})

test('Substract decimal numbers', () => {
    let calculate = new calculator();
    expect(calculate.substract(7, 2.78)).toBe(4.22);
    expect(calculate.substract(1.5, 1.5)).toBe(0);
    expect(calculate.substract(2.33, 1.33)).toBe(1);
    expect(calculate.substract(5.4, 10.57)).toBe(-5.17);
})

test('Substract positive and negative numbers', () => {
    let calculate = new calculator();
    expect(calculate.substract(0, -10)).toBe(10);
    expect(calculate.substract(13, -4)).toBe(17);
    expect(calculate.substract(-56, 20)).toBe(-76);
})

// Divide

test('Divide two numbers', () => {
    let calculate = new calculator();
    expect(calculate.divide(8, 2)).toBe(4);
    expect(calculate.divide(1118, 13)).toBe(86);
    expect(calculate.divide(5, 5)).toBe(1);
    expect(calculate.divide(45, 32)).toBe(1.41);
    expect(calculate.divide(72, 103)).toBe(0.70);
})

test('Divide by zero', () => {
    let calculate = new calculator();
    expect(calculate.divide(0, 0)).toBe(NaN);
    expect(calculate.divide(10, 0)).toBe(Infinity);
    expect(calculate.divide(-10, 0)).toBe(-Infinity);
})

// Multiply

test('Multiply two numbers', () => {
    let calculate = new calculator();
    expect(calculate.multiply(8, 2)).toBe(16);
    expect(calculate.multiply(589, 45)).toBe(26505);
    expect(calculate.multiply(5, 1)).toBe(5);
    expect(calculate.multiply(45, 1.5)).toBe(67.50);
    expect(calculate.multiply(6.5, 9.3)).toBe(60.45);
    expect(calculate.multiply(50, 0)).toBe(0);
})

test('Multiply negative and positive numbers', () => {
    let calculate = new calculator();
    expect(calculate.multiply(18, -22)).toBe(-396);
    expect(calculate.multiply(-118, -13)).toBe(1534);
    expect(calculate.multiply(5.78, -5)).toBe(-28.90);
    expect(calculate.multiply(-3.67, -9.65)).toBe(35.42)
})