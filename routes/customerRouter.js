const express = require('express');
const router = express.Router();
const Customer = require('../services/customer.services');
const customer = new Customer();
const { ro } = require('faker/lib/locales');
const validatorHandler = require('../middlewares/validator.handler')
const {createCustomer,updateCustomer,getCustomer} = require ('../schemas/customer.schema');
const { valid } = require('joi');



router.get('/',
  async (req,res)=>{
    const cus= await customer.Find()
    res.json(cus)
})

router.get('/:id',
  async (req,res,next)=>{
    try {
      const {id} = req.params;
      const cus = await customer.FindOne(id)
      res.json(cus)
    } catch (error) {
      next(error)
    }
});

router.post('/',
  async(req,res,next)=>{
    try {
      const body = req.body;
      const NewCustomer = customer.Create(body);
      res.json(NewCustomer);
    } catch (error) {
      next(error)
    }
});

router.patch('/:id',
  async(req,res,next)=>{
    try {
      const {id} = req.params;
      const body = req.body;
      const custo = await customer.Update(id,body);
      res.json(custo)
    } catch (error) {
      next(error)
    }
});

router.delete('/:id',
  async(req,res,next)=>{
    try {
      const {id} = req.params;
      const cus = await customer.Delete(id);
      res.json(cus)
    } catch (error) {
      next (error)
    }
})

module.exports = router
