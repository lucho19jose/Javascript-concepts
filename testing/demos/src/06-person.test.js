const Person = require('./06-person');

describe('Test Person Class', () => {
  let person;
  beforeEach(() => {
    person = new Person('Nico', 45, 1.7);
  })

  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 60;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
})

