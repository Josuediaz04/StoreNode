const faker = require('faker');
const boom = require('@hapi/boom')
const pool = require('../libs/postgres.pool');
const sequalize = require('../libs/sequalize')

class ProductsServices {
  constructor() {
    this.productos = []; // Inicializa la propiedad productos antes de llamar a Generate()
    this.Generate();

  }

  Generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.productos.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 100),
        isBlock: faker.datatype.boolean()
      });
    }
  }

   async Create(data) {
    const NewProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.productos.push(NewProduct)
    return NewProduct;
  }

  async Find() {
    const query = 'SELECT * FROM task';
    const [data] = await sequalize.query(query);
    console.log(data)
    return data


  }


  async FindOne(id) {
      const product = this.productos.find(item => item.id === id);
      if (!product) {
        throw boom.notFound('product not found')
      }
      if(product.isBlock){
        throw boom.conflict('product isBlock')
      }
      return product
  }

   async Update(id,changes) {
    const index = this.productos.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('product not found')
    }
    let product = this.productos[index];
    this.productos[index] = {
      ...product,
      ...changes
    };
    return this.productos[index]
  }

  async Delete(id) {
    const index = this.productos.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('product not found')
    }
    this.productos.splice(index,1);
    return {id};
  }
}

module.exports = ProductsServices;
