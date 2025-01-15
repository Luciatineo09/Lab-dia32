// ./js/calculator/calculator.test.js
const { divide, multiply } = require('./calculator');

describe('Pruebas para la función divide()', () => {
  test('Dividir dos números positivos', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('Lanzar error al intentar dividir por cero', () => {
    expect(() => divide(10, 0)).toThrow("No se puede dividir por cero");
  });
});

describe('Pruebas para la función multiply()', () => {
  test('Multiplicar dos números positivos', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('Debe devolver 0 al multiplicar por cero', () => {
    expect(multiply(10, 0)).toBe(0);
  });
});

