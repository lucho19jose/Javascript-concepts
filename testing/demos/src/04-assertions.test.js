//matches

test('test obj', () => {
  const data = { name : 'jose' };
  data.lastname = 'barboza';
  expect(data).toEqual({ name: 'jose', lastname: 'barboza' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();

  expect(true).toEqual(true);
  expect(false).toEqual(false);
});

test('string', () => {
  expect('jostop').toMatch(/stop/);
});

test('list/arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(2);
  expect(numbers).toEqual([1,2,3,4]);
})


/* practice time */

test('test obj', () => {
  const data = { name : 'jose' };
  data.lastname = 'gonzales';
  expect(data).toEqual({ name: 'jose', lastname: 'gonzales' });
})

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
})

test('booleans', () => {
  const item = true;
  expect(item).toBeTruthy();
  expect(item).toEqual(true);
  expect(item).not.toBeFalsy();
})

test('string', () => {
  const name = 'jose luis barboza gonzales';
  expect(name).toMatch(/barboza/);
  expect(name).toMatch('barboza');

})

test('arrays', () => {
  const catNames = ['beauty', 'milo', 'mifo', 'jean'];

  expect(catNames).toContain('milo');
  expect(catNames).toEqual(expect.arrayContaining(['milo', 'jean']));
  expect(catNames).not.toEqual(expect.arrayContaining(['milo', 'jean', 'jose']));
})
