const calculator = require('./calculator');
// suma
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

//resta
test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Division
test('dividir 5*4', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('dividir 8/2', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

//multiplicacion
test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

test('multiplicar 6 por 10 igual a 60', () => {
  expect(calculator.multiply(6, 10)).toBe(60);
});