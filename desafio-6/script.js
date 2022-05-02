const http = require("http")
const express = require("express")

const app = express()
const PORT = 8080
app.listen(8080)/*HAGO QUE ESCUCHE EL PUERTo */
console.log(`Servidor Http escuchando en le puerto ${PORT}`)
app.get("/",(peticion,respuesta)=>{   /*le voy a pedir informacion al servidor */
    respuesta.send(`<h1 styles="color:blue;">Bienvenido al servidor express </h1>`)
}) 
let visitas = 0 
app.get("/visitas",(peticion,respuesta)=>{   /*le voy a pedir informacion al servidor */
    respuesta.send(`la cantidad de visitas es ${++visitas}`)
}) 
app.get("/fyh",(peticion,respuesta)=>{   /*le voy a pedir informacion al servidor */
    respuesta.send({fyh: new Date().toLocaleString()})
})   
