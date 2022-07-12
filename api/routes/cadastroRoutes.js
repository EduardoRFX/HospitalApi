const express = require('express')
const CadastroController = require('../controllers/CadastroController.js')

const router = express.Router()

router 

    .get('/cadastros', CadastroController.TodosCadastros)
    .get('/usuarios/:pacienteId/cadastros/:cadastroId', CadastroController.UmCadastro)
    .post('/usuarios/:pacienteId/cadastros', CadastroController.criarCadastro)
    .post('/cadastro/:id/restaurar', CadastroController.restauraCadastro)
    .put('/usuarios/:pacienteId/cadastro-atualizar', CadastroController.attCadastro)
    .delete('/cadastro/:id', CadastroController.deletarCadastro)


module.exports = router