const express = require ('express');
const router = express.Router();
const Users =  require('../services/users.services')
const user = new Users()


router.get('/', async (req,res,next)=>{
    const users = await user.Find()
    res.json(users)
})

router.get('/:id', async (req,res,next)=>{
 try {
  const {id} = req.params;
  const users = await user.FindOne(id)
  res.json(users)
 } catch (error) {
  next(error)
 }
})

router.post('/',async (req,res,next)=>{
  try {
    const body = req.body;
    const users = await user.Create(body)
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req,res,next)=>{
try {
  const {id} = req.params;
  const body = req.body;
  const users = await user.Update(id,body)
  res.json(users)
} catch (error) {
  next(error)
}
})

router.delete('/:id', async (req,res,next)=>{
try {
  const {id} = req.params;
  const users = await user.Delete(id)
  res.json(users)
} catch (error) {
  next(error)
}
})

module.exports = router
