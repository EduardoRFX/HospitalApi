const express = require('express')
const Router = require('./routes/index.js')

const app = express()
const port = 8000

Router(app)

app.get('/', (req, res) =>{
    return res.status(200).json({message: 'Bem-vindo ao Sistema do Hospital'})
})


app.listen(port, () =>{
    console.log('Servidor Conectado!')
})