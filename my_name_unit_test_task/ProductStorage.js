const datastorage = [
  {
    "id": 1,
    "model": "Future 2025",
    "type": "moccamaster",
    "accessories": ["cleaning brush", "coffee cup"],
    "price": 99,
    "extras": [{
      "name": "coffee",
      "price": 15
    },
    {
      "name": "spoon",
      "price": 10
    },
    {
      "name": "color gold",
      "price": 100
    }
    ]
  },
  {
    "id": 2,
    "model": "Beast II",
    "type": "vacuum cleaner",
    "accessories": ["bags", "filter set", "delux brush set"],
    "price": 99,
    "extras": [{
      "name": "manual",
      "price": 15
    },
    {
      "name": "warranty",
      "price": 10
    }
    ]
  },
  {
    "id": 3,
    "model": "MaxEffect 2000",
    "type": "radio",
    "accessories": [],
    "price": 29,
    "extras": []
  }
]

//export default class ProductStorage
module.exports = class ProductStorage {

  constructor(jsonData) {
    if (jsonData == undefined) throw 'data storage is missing'
    this.jsonData = jsonData
  }

  getById(id) {
    let found;
    datastorage.forEach(e => {
      if (e.id === id) found = e
      //if (!e.hasOwnProperty('id')) 'parameter missing';
      //console.log(found)
      //return found ? found : null
    })
    return found
  }

  getAllIdsByModel(value) {
    let accepted = []
    for (let i = 0; i < datastorage.length; i++) {
      if (datastorage[i].model === value) accepted.push(datastorage[i].id)
    }
    console.log(accepted)
    return accepted
  }

  getAllProductTypes() {
    let indiTypes = [...new Set(datastorage.map(e => e.type))]
    console.log(indiTypes)
    return indiTypes
  }

  getAllProductsByType(type) {
    //if (!e.hasOwnProperty(type)) 'missing parameter'; 
    let types = datastorage.filter(e => e.type === type)
    console.log(types)
    return types
  }

  hasAccessories(id) {
    let hasIt = datastorage.find(e => e.id === id)
    return hasIt.hasOwnProperty('accessories')
  }

  GetProductAccessories(id) {
    let accessories = []
    datastorage.forEach(e => {
      if (e.hasOwnProperty('accessories')) accessories.push(e.accessories.flat())
    })
    console.log(accessories)
    return accessories
  }

  getPriceWithoutExtras(id) {
    let hasIt = datastorage.find(e => e.id === id)
    if (!hasIt.hasOwnProperty('price')) throw 'nothing found with given id'
    console.log(hasIt.price)
    return hasIt.price
  }

  getTotalPrice(id) {
    let hasIt = datastorage.find(e => e.id === id)
    if (hasIt == undefined) 'throw nothing found with given id'
    let price =
      JSON.stringify(hasIt).match(/price..\d+/g).join(' ').replace(/\D+/g, ' ').split(' ').reduce((a, b) => a + +b, 0)
    console.log(price)
    return price
  }

  getPriceOfTheExtras(id) {
    let hasIt = datastorage.find(e => e.id === id)
    if (hasIt == undefined) 'throw nothing found with given id'
    console.log(hasIt.extras)
    let extraPrices = hasIt.extras.reduce((a, b) => a + +b.price, 0)
    console.log(extraPrices)
    return extraPrices
  }


}

// console.log(new ProductStorage(datastorage).getById(3))
// console.log(new ProductStorage(datastorage).getAllIdsByModel('MaxEffect 2000'))
// console.log(new ProductStorage(datastorage).getAllProductTypes())
// console.log(new ProductStorage(datastorage).getAllProductsByType('moccamaster'))
// console.log(new ProductStorage(datastorage).hasAccessories(2))
// console.log(new ProductStorage(datastorage).GetProductAccessories(2))
// console.log(new ProductStorage(datastorage).getPriceWithoutExtras(2))
// console.log(new ProductStorage(datastorage).getTotalPrice(1))
// console.log(new ProductStorage(datastorage).getPriceOfTheExtras(2))

