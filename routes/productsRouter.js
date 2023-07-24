const express = require('express');
const router = express.Router();
const ProductsServices = require('../services/products.services')
const services = new ProductsServices();
const validatorHandler = require('../middlewares/validator.handler')
const {createProduct,updateProduct,getProduct} = require ('../schemas/products.schema');
const { valid } = require('joi');

router.get('/', (validatorHandler, getProduct,'params' ),
  async (req,res)=>{
  const productos = await services.Find();
  res.json(productos);
})

router.get('/filter',(req,res)=>{ // todo ENDPOINT QUE SEA ESPECIFICO DEBE IR ANTES DE LO QUE ES DINAMICO
  res.send('yo soy un filtro ')
})

router.get('/:id', async (req,res,next)=>{
  try {
    const {id} = req.params;
    const productos = await services.FindOne(id)
    res.json(productos)
  } catch (error) {
    next(error)
  }
})

router.post('/',(validatorHandler, createProduct, 'body'),
  async( req,res )=>{
  const  body  = req.body;
  const NewProduct = await services.Create(body);
  res.json(NewProduct);
});


router.patch('/:id', (validatorHandler, updateProduct, 'body'),
   async (req,res,next)=>{
  try {
    const {id} = req.params;
    const body = req.body;
    const producto = await services.Update(id,body);
    res.json(producto)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id',(validatorHandler, getProduct, 'params'),
async (req,res,next)=>{
  try {
    const {id} = req.params;
    const producto = await services.Delete(id)
    res.json( producto )
  } catch (error) {
    next(error)
  }
})

module.exports = router;
