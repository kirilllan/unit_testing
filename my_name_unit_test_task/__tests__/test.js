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

// test 4 getAllProductsByType(type)
test('test if there are moccamasters', () => {
  expect(new Prod(prods).getAllProductsByType("moccamaster").length).toBeGreaterThanOrEqual(1)
})

// test 5 hasAccessories(id)
test('test if there are accessories in product id 2', () => {
  expect(new Prod(prods).hasAccessories(2)).toBe(true)
})

// test 6 GetProductAccessories(id)
test('id 3 has no accessories should be true', () => {
  expect(new Prod(prods).GetProductAccessories(3)).toEqual([])
})

//test 7 getPriceWithoutExtras(id)
test('id 2 price is 99', () => {
  expect(new Prod(prods).getPriceWithoutExtras(2)).toEqual(99)
})

//console.log(new Prod(3))
describe("this tests for an exceptiom", () => {
  const testFunction = new Prod(101010)

  test("test if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("testFunction is not a function");
  });
});

