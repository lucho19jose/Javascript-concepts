const { sum, multiply, divide, getmodule } = require('./02-math');

test('adds 1 + 3 to equal 4', () => {
  const rta = sum(1, 3);

  expect(rta).toBe(4);
});

test('should be 4', () => {
  const rta = multiply(2, 2);

  expect(rta).toBe(4);
})

test('should divide', () => {
  const rta = divide(8, 2);

  expect(rta).toBe(4)

  const rta3 = divide(5,2);
  expect(rta3).toBe(2.5)
});

test('should get module',  () => {
  const rta = getmodule(8, 2);

  expect(rta).toBe(0)

  const rta2 = getmodule(5,2);
  expect(rta2).toBe(1)

  const rta3 = getmodule(7, 8);
  expect(rta3).toBe(7)
})
