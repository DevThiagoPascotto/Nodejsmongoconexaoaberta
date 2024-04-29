// config inicial chamar o express vai procurar o módulo
const express = require('express')
const app = express() // Inicializar as apps 

// depois do db
const mongoose = require("mongoose")


//forma de ler JSON UTILIZAR MIDDLEWARES 
app.use( //criando  o MIDDLEWARES
    express.urlencoded({
      extended: true,
    }),
  )

  app.use(express.json())

  //rota inicial GET pegar algo so servidor  endpoint 
  app.get('/',  (req, res) => {

  //mostrar requisição mostrar a resposta que vai ser JSON
    res.json({ message: 'Oi Express'})
})

// senha: Mongo: XGkpa4RsDQqn4YO8
//mongodb+srv://thiago:XGkpa4RsDQqn4YO8@apicluster.hmuezsc.mongodb.net/?retryWrites=true&w=majority&appName=APICluster
//Modificado com myFistDatabase
//mongodb+srv://thiago:XGkpa4RsDQqn4YO8@apicluster.hmuezsc.mongodb.net/myFistDatabase?retryWrites=true&w=majority&appName=APICluster
//mongodb+srv://thiago:XGkpa4RsDQqn4YO8@apicluster.hmuezsc.mongodb.net/bancodaapi
//'mongodb+srv://user:password@restfulapibanco.lq7ds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//AgoraIniciar a conexão 

//Entregar a porta
const DB_USER = 'thiago'
const DB_PASSWORD = encodeURIComponent('XGkpa4RsDQqn4YO8')

mongoose.connect('mongodb://localhost:27017/ARQUIVO')
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))


