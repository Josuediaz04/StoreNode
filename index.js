const express = require('express');
const routerApi = require('./routes')
const {logErrors,errorHandler,BoomerrorHandler} = require('./middlewares/error.handler')
const app = express();
const port = 3000;

//midlewares
app.use(express.json());
routerApi(app);
app.use(logErrors);
app.use(BoomerrorHandler)
app.use(errorHandler)

app.get('/',(req,res)=>{
  res.json('este es mi servidor :)')
})

app.listen(port,()=>{
  console.log('mi puerto esta corriendo en el puerto ' + port);
}
)
