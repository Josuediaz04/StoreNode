const express = require ('express');
const router = express.Router();
const Categories = require ('../services/categories.services');
const categorias = new Categories();
const validatorHandler = require('../middlewares/validator.handler')
const {createCategorie,getCategorie,updateCategorie} = require ('../schemas/categories.schema');
const { ne, ge } = require('faker/lib/locales');
const { valid } = require('joi');

router.get('/',
 async(req,res)=>{
  const cat = await categorias.Find()
  res.json(cat);
})

router.get('/:id',
   async(req,res,next)=>{
  try {
    const {id} = req.params;
    const categories = await categorias.FindOne(id)
    res.json(categories)
  } catch (error) {
    next(error)
  }
})

router.post('/',
  async(req,res,next)=>{
    try {
      const name = req.body;
      const NewCategorie = await categorias.Create(body)
      res.json(NewCategorie);
    } catch (error) {
      next(error)
    }
})

router.patch('/:id',
  async (req,res,next)=>{
    try {
      const {id} = req.params;
      const body = req.body;
      const categoria = await categorias.Update(id,body)
      res.json(categoria)
      console.log({id})
    } catch (error) {
      next(error)
    }
})


router.delete('/:id',
  async(req,res,next)=>{
    try {
      const id = req.params;
      const DeleteCategorie = await categorias.Delete(id)
      res.json(DeleteCategorie)
    } catch (error) {
      next(error)
    }
  })
module.exports = router;
