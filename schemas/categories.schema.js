const Joi = require ('joi')

const id = Joi.string().uuid();
const name = Joi.string().alphanum();
const price = Joi.string().alphanum();

const createCategorie = Joi.object({
  name: name.required(),
  const: price.required()
})

const updateCategorie = Joi.object({
  name: name.required(),
  prrce: price.required()
})

const getCategorie = Joi.object({
  id: id.required()
})

module.exports = {
  createCategorie,
  updateCategorie,
  getCategorie
}
