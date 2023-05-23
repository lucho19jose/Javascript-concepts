

describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });

  afterAll(() => {
    console.log('afterAll');
    // down db
  })

  beforeEach(() => {
    console.log('before each wiii....');
  })

  afterEach(() => {
    console.log('after each ....');
  })

  test('case 1', () => {
    console.log('case 1');
    expect(1+1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1+3).toBe(4);
  });

  describe('other group', () => {
    beforeAll(() => {
      console.log('beforeAll just in the scope group');
    })
    test('case 3', () => {
      console.log('case 3');
      expect(1+2).toBe(3);
    })
    test('case 4', () => {
      console.log('case 4');
      expect(5+2).toBe(7)
    })
  })
})
