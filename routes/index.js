const productsRouter = require ('./productsRouter');
const express = require ('express');
const categoriesRouter= require('./categoriesRouter');
const userRouter = require('./usersRouter');


function routerApi(app){
  const router = express.Router()
  app.use('/api/v1',router)
  router.use('/products',productsRouter)
  router.use('/categories',categoriesRouter)
  router.use('/users',userRouter)
}



module.exports = routerApi


