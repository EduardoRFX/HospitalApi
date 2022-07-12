const express = require('express')
const QuartoClinicoController = require('../controllers/QuartoClinicoController.js')

const router = express.Router()

router 

    .get('/quartos', QuartoClinicoController.TodosQuartosClinicos)
    .get('/usuarios/:medicoId/quartos/:quartoId', QuartoClinicoController.UmQuartoClinico)
    .post('/quartos', QuartoClinicoController.criarQuartoClinico)
    .post('/quartos/:id/restaurar', QuartoClinicoController.restaurarQuartoClinico)
    .put('/quartos/:id', QuartoClinicoController.attQuartoClinico)
    .delete('/quartos/:id', QuartoClinicoController.deletarQuartoClinico)


module.exports = router