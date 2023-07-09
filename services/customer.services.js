const faker = require('faker')
const boom = require('@hapi/boom')

class Customer {
  constructor (){
    this.customer = [];
    this.Generate();
  }

    Generate(){
      const limit = 10
      for (let index = 0; index < limit; index++) {
        this.customer.push({
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          email: faker.internet.email(),
          direction: faker.address.streetName()
        })
      }
    }

   async  Find(){
      return this.customer
    }

   async FindOne(id){
      const customer = this.customer.find(item => item.id === id);
      if (!customer){
        throw boom.conflict(`Customer with ID ${id} not found`);
      }
      return customer
    }

    async Update(id,changes){
      const index = this.customer.findIndex(item => item.id === id);
      if(index === -1){
        throw boom.notFound("Customer Not Found")
      }
        custo = this.customer[index];
        this.customer[index]={
          ...custo,
          ...changes
        };
      return this.customer[index]
    }

    async Delete(id){
      const index = this.customer.findIndex(item => item.id === id);
      if( index === -1){
        throw boom.notFound('Customer Not Found')
      }
      this.customer.splice(index,1)
      return {id}
    }
}

module.exports = Customer;
