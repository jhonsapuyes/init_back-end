

const {Router}= require('express')
const route= Router()

//http://localhost:9000/api/deportes
//http://localhost:9000/api/usuarios
route.get('/table',(req,res)=>{


            res.json([{"respuesta":"not results"}])
        
    
        //res.json(usuarios)
})


module.exports= route;




