const faker = require('faker')
const boom = require('@hapi/boom')
const getConnection = require('../libs/postgres')

class Users{

  constructor(){
    this.users=[],
    this.Generate()
  }

  async Generate(){
    const limit = 10
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        // name: faker.interne
        email: faker.internet.email(),
        userStatus: faker.datatype.boolean()
      })
    }
  }

  async Create(data){
    const Users ={
      id : data.faker.datatype.uudi(),
      ...data
    }
    this.users.push({Users})
    return Users
  }

  async Find(){
    const client = await getConnection();
    const rta = await client.query('SELECT *FROM task')
    return rta.rows
  }

  async FindOne(id){
    const user = this.users.find(item => item.id === id)
    if(!user){
      throw boom.notFound('user notfound')
    }
    if(user.userStatus === false){
      throw boom.conflict('user inactivo')
    }if (user.userStatus === true){
      return user
    }

  }

  async Update(id,changes){
    const index = this.users.findIndex(item => item.id === id)
    if(index == -1){
      throw boom.notFound(`User with ${id} not found`)
    }
    const user = this.users[index]
    this.users[index] ={
      ...user,
      ...changes
    }
    return this.users[index]
  }

  async Delete(id){
    const index = this.users.findIndex(item => item.id === id)
    if(index == -1){
      throw boom.notFound(`User with ${id} not found`)
    }
    this.users.splice(index,1)
    return {id}
  }
}

module.exports = Users
