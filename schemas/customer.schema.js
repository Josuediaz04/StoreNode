const Joi = require ('joi')

const id = Joi.string().alphanum()
const name = Joi.string()
const email = Joi.string().email()
const direction = Joi.string()

const createCustomer = Joi.object({
  name: name.required(),
  email: email.required(),
  direction: direction.required()
})

const updateCustomer = Joi.object({
  name: name,
  email: email,
  direction: direction,
})

const getCustomer = Joi.object({
  id: id
})

module.exports = ({
  createCustomer,
  updateCustomer,
  getCustomer
})
