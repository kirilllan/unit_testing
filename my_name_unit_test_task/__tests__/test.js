const prods = require('../datastorage.json')
const Prod = require('../ProductStorage.js')


// test1 getById 
describe('Find by id', () => {
  test('id 3 exists', () => {
    expect(new Prod(prods).getById(3)).toBeInstanceOf(Object);
  })
});

//test 2 getAllIdsByModel
describe('Testing sum with floats', () => {
  const testVals = [["Future 2025", 1]]
  test.each(testVals)('getAllIdsByModel("^Future 2025^") = %f', (a, expected) => {
    expect(new Prod(prods).getAllIdsByModel("Future 2025")).toHaveLength(1);
  });
});

//test 3 getAllProductTypes
test('types', () => {
  expect(new Prod(prods).getAllProductTypes().length).toBeGreaterThan(1)
})

//console.log(new Prod(3))
describe("this tests for an exceptiom", () => {
  const testFunction = new Prod(101010)

  test("test if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("testFunction is not a function");
  });
});

