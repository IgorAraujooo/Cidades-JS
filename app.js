/**********************************************************************************************************************************
* Objetivo: Criar uma api para responder dados de estado e cidades                                                                *
* Data: 10/11/23                                                                                                                  *
* Autor: Igor Araujo                                                                                                              *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

/**
 *  Instalações das dependencias para criação da API 
 *  express - npm install express --save
 *  cors - npm install cors --save
 *  body-parser - npm install body-parser --save
 */

// Import das bibliotecas do projeto 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Cria um objeto app tendo como referência a classe do express
const app = express()

app.use((request, response, next) => {
    // Configura quem poderá fazer requisições na API 
    // * = Libera para todos
    // IP restringe o acesso 
  response.header('Acess-Control-Allow-Origin', '*')

  // Configura os metodos que poderão ser utilizados na API (GET, POST, PUT e DELETE)
  response.header('Acess-Control-Allow-Methods', '*')

  app.use(cors())

  next()
  });

  //EndPoints: Listar a sigla de todos os Estados 

  app.get('/estados/sigla', cors(), async function(request, response, next){
    let controleListaEstados = require('./modulo/cidades.js')
    let estados = controleListaEstados.getListaDeEstados()
    response.json(estados)
    response.status(200)
})

// Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log("Server rodando")
})