const express = require ('express');

const cors = require('cors')

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/api/data/',(req, res) =>{
    console.log("Solicitud recibida");
    res.status(200).json({
        status:'success',
        message: 'Datos del servidor'
    })
})

app.post('api/submit',(req,res)=>{
    const {data} = req.body;
    //...
    res.status(201).json({status:'success',data:data});
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})

