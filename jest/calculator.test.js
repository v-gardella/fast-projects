const calculator = require('./calculator')

// Add

test('Add two numbers', () => {
    expect(1, 2).toBe(3);
    expect(10, 20).toBe(30);
    expect(-10, -25).toBe(-35);
    expect(0, 25).toBe(25);
    expect(5839, 1038).toBe(6877);
})

test('Add decimal numbers', () => {
    expect(5, 2,33).toBe(7.33)
    expect(1, 1.5).toBe(2.50);
    expect(2.5, 2.5).toBe(5);
})

test('Add positive and negative numbers', () => {
    expect(-1, 1).toBe(0);
    expect(-10, 15).toBe(5);
    expect(-10, 5).toBe(-5);
})

// Substract

test.skip('Substract two numbers', () => {
    expect(2, 1).toBe(1);
    expect(20, 10).toBe(10);
    expect(-10, -25).toBe(15);
    expect(0, 10).toBe(-10);
    expect(7384, 3084).toBe(4300);
})

test.skip('Substract decimal numbers', () => {
    expect(7, 2.78).toBe(4,22);
    expect(1.5, 1.5).toBe(0);
    expect(2.33, 1.33).toBe(1);
    expect(5.4, 10,57).toBe(-5,17);
})

test.skip('Substract positive and negative numbers', () => {
    expect(0, -10).toBe(10);
    expect(13, -4).toBe(17);
    expect(-56, 20).toBe(-76);
})

// Divide

test.skip('Divide two numbers', () => {
    expect(8, 2).toBe(4);
    expect(1118, 13).toBe(86);
    expect(5, 5).toBe(1);
    expect(45, 32).toBe(1,41);
    expect(72, 103).toBe(0,70);
})

test.skip('Divide by zero', () => {
    expect(0, 0).toBe(NaN);
    // expect(10, 0).toBe(-In)
})

// Multiply

test.skip('Multiply two numbers', () => {
    expect(8, 2).toBe(16);
    expect(589, 45).toBe(26505);
    expect(5, 1).toBe(5);
    expect(45, 1.5).toBe(67,50);
    expect(6.5, 9.3).toBe(60,45);
})

test.skip('Multiply negative and positive numbers', () => {
    expect(18, -22).toBe(-396);
    expect(-118, -13).toBe(1534);
    expect(5.78, -5).toBe(-28.90);
    expect(-3.67, -9.65).toBe(35,42)
})