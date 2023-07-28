const Joi = require('joi');


const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(3).max(10);

const createProduct = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProduct = Joi.object({
  name: name,
  price: price
})

const getProduct = Joi.object({
  id: id
})

module.exports = {
  createProduct,
  updateProduct,
  getProduct
}
