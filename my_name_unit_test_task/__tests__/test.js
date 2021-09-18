const prods = require('../datastorage.json')
const Prod = require('../ProductStorage.js')


// test1 getById 
describe('Test getById(id)#1:', () => {
  test('not passing an argument/no parameter given', () => {
    expect(() => new Prod(prods).getById()).toThrow(new Error('no parameter passed'))
  })
})
describe('Test getById(id)#2:', () => {
  test('id 3 exists', () => {
    expect(new Prod(prods).getById(3)).toBeInstanceOf(Object)
  })
})
describe('Test getById(id)#3:', () => {
  test('nothing found with specific id, returns undefined', () => {
    expect(new Prod(prods).getById(123000)).toBe(undefined)
  })
})

//test 2 getAllIdsByModel(value)
describe('Testing if values pushed to array', () => {
  const testVals = [
    ['Future 2025', 1],
    ['I don\'t exist hehe', 0],
    [NaN, 0]
  ]
  const testVals2 = [
    ['Future 2025', 1],
    ['Beast II', 2],
    ['MaxEffect 2000', 3]
  ]
  const testVals3 = [
    ['Future 2025', [11]],
    ['Beast II', [-2]],
    ['MaxEffect 2000', ['id']]
  ]
  test.each(testVals)('getAllIdsByModel("^%s^") = %d', (modelName, expectedLength) => {
    expect(new Prod(prods).getAllIdsByModel(modelName)).toHaveLength(expectedLength)
  })
  test.each(testVals2)('Contains correct id', (modelName, theId) => {
    expect(new Prod(prods).getAllIdsByModel(modelName)).toContain(theId)
  })
  test.each(testVals3)('Not to contain', (modelName, wrongId) => {
    expect(new Prod(prods).getAllIdsByModel(modelName)).toEqual(expect.not.arrayContaining(wrongId))
  })
})


//test 3 getAllProductTypes
test('getAllProductTypes() has more than 1 different types', () => {
  expect(new Prod(prods).getAllProductTypes().length).toBeGreaterThan(1)
})
test('getAllProductTypes() has moccamaster', () => {
  expect(new Prod(prods).getAllProductTypes()).toContain('moccamaster')
})
test('getAllProductTypes() has NOT jet-pack', () => {
  expect(new Prod(prods).getAllProductTypes()).not.toContain('jet-pack')
})


// test 4 getAllProductsByType(type)
test('test if there are moccamasters', () => {
  expect(new Prod(prods).getAllProductsByType("moccamaster").length).toBeGreaterThanOrEqual(1)
})
test('test if there is radio', () => {
  expect(new Prod(prods).getAllProductsByType("radio")).toBeDefined()
})
test('throw, when missing an parameter', () => {
  expect(() => new Prod(prods).getAllProductsByType()).toThrow()
})


// test 5 hasAccessories(id)
test('test if there are accessories in product id 2', () => {
  expect(new Prod(prods).hasAccessories(2)).toBe(true)
})
test('test that false is returned when there are NO accessories when missing a param', () => {
  expect(new Prod(prods).hasAccessories()).toBeFalsy()
})
test('test that false is returned when there are NO accessories in id 3, empty array falsiness', () => {
  expect(new Prod(prods).hasAccessories(3)).toBeFalsy()
})


// test 6 GetProductAccessories(id)
test('id 3 has no accessories should be true', () => {
  expect(new Prod(prods).GetProductAccessories(3)).toEqual([])
})
test('returns an empty array if no accessories found with invalid id', () => {
  expect(new Prod(prods).GetProductAccessories(123000).length).toBeLessThanOrEqual(0)
})
test('getProductAccessories(1) should return ["cleaning brush", "coffee cup"]', () => {
  const what = jest.fn(() => new Prod(prods).GetProductAccessories(1))
  what()
  expect(what).toHaveReturnedWith(["cleaning brush", "coffee cup"])
})


//test 7 getPriceWithoutExtras(id)
test('id 2 price is 99', () => {
  expect(new Prod(prods).getPriceWithoutExtras(2)).toEqual(99)
})

// test 8 getTotalPrice(id)
test('id 1 TOTAL price is 224', () => {
  expect(new Prod(prods).getTotalPrice(1)).toStrictEqual(224)
})

// test 9 getPriceOfTheExtras(id)
test('id 2 extra prices to total 15', () => {
  expect(new Prod(prods).getPriceOfTheExtras(2)).toEqual(25)
})

//console.log(new Prod(3))
describe("this tests for an exceptiom", () => {
  const testFunction = new Prod(101010)

  test("test if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("testFunction is not a function");
  });
});

