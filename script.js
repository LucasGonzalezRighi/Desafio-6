/*le digo a la consola que cuando guarde los cambos se actualice automatica mente comando: npm run strat 
"scripts": {
   "start": "nodemon ./script.js", */
   const http = require("http") /*requiero el modo http*/
   const express = require("express")/*requiero el modo http*/
/*ejemplo de hora*/
   const mensaje = () =>{
    const hora = new Date().getHours() /*gethour es la funcion que te da la hora*/
    if(hora>=6 && hora <=12){
        return "Buenos dias"
    }else if(hora>=13 && hora <=19){
        return"Buenas Tardes"
    }else{
        return "Buenas Noches"
    }
}


// const app = http.createServer((peticion,respuesta)=>{/* create server crea el servidor pero para eso hay que guardarlo en una variable o constante */
//     respuesta.end(mensaje())
// })
// const PORT = 8080
// app.listen(8080)/*HAGO QUE ESCUCHE EL PUERTo */
// console.log(`Servidor Http escuchando en le puerto ${PORT}`)


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
