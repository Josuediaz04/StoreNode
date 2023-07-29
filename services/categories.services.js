const faker = require('faker');
const boom  = require('@hapi/boom')


class Categories {

  constructor(){
    this.categories = [];
    this.Generate()
  }

  Generate(){
      const limit = 100;
      for (let index = 0; index < limit; index++) {
        this.categories.push({
        id: faker.datatype.uuid(),
        name:faker.commerce.productAdjective(),
        price: parseInt (faker.commerce.price(),100),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async Create(data){
    const Categorie = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push({Categorie})
    return Categorie;
  }


  async Find(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve (this.categories)
      },1000)
    })
  }

  async FindOne(id){
    const categorie = this.categories.find(item=> item.id === id);
    if(!categorie){
      throw boom.notFound('categorie not found')
    }
    if(categorie.isBlock){
      throw boom.conflict('This category is blocked')
    }
    return categorie
  }

  async Update(id,changes){
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('categorie not found')
    }
    const categorie = this.categories[index];
    this.categories[index]={
      ...categorie,
      ...changes
    }
    return this.categories[index]

  }

  async Delete(id){
    const index = this.categories.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('categorie not found')
    }
    this.categories.splice(index,1)
    return(id)
  }
}

module.exports = Categories
