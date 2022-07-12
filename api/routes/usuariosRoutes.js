const express = require('express')
const UsuariosController = require('../controllers/UsuariosController.js')

const router = express.Router()

router 

    .get('/usuarios',UsuariosController.pegaTodosUsuarios)
    .get('/usuarios/ativos', UsuariosController.pegaUsuariosAtivos)
    .get('/usuarios/:id', UsuariosController.UmUsuario)
    .post('/usuarios', UsuariosController.criarUsuario)
    .post('/usuarios/:id/restaurar', UsuariosController.restaurarUsuario)
    .post('/usuarios/:pacienteId/cancelar', UsuariosController.cancelarCadastro)
    .put('/usuarios/:id', UsuariosController.attUsuario)
    .delete('/usuarios/:id', UsuariosController.deletarUsuario)


module.exports = router