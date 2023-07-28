const express = require('express');
const cors = require ('cors')
const routerApi = require('./routes')
const {logErrors,errorHandler,BoomerrorHandler} = require('./middlewares/error.handler')
const app = express();
const port = 3000;

//midlewares
app.use(express.json());
app.use(cors());
routerApi(app);

const whitelist = ['http://localhost:5500', 'https://myapp.com']// es(ta linea configura que solamente las url que estan en el aray pueden acceder a la API
const options = {
  origin: (origin, callback) =>{
    if (whitelist.includes(origin)) {
      callback(null,true)
    }else{
      callback(new Error('no permitido'))
    }
  }
}

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
