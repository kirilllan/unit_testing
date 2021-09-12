const prods = require('../datastorage.json')
const Prod = require('../ProductStorage.js')


// test1 getById 
describe('Find by id', () => {
  test('id 3 exists', () => {
    expect(new Prod(prods).getById(3)).toBeInstanceOf(Object);
  })
});



//console.log(new Prod(3))
describe("this tests for an exceptiom", () => {
  const testFunction = new Prod(101010)

  test("test if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("testFunction is not a function");
  });
});

