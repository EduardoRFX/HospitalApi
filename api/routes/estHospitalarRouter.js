const express = require('express')
const EstHospitalarController = require('../controllers/EstHospitalarContreller.js')

const router = express.Router()

router 

    .get('/estagioH', EstHospitalarController.TodosEstHospitalar)
    .get('/estagioH/:id', EstHospitalarController.UmEstHospitalar)
    .post('/estagioH', EstHospitalarController.criarEstHospitalar)
    .post('/estagioH/:id/restaurar', EstHospitalarController.restaurarEstHospitalar)
    .put('/estagioH/:id', EstHospitalarController.attEstHospitalar)
    .delete('/estagioH/:id', EstHospitalarController.deletarEstHospitalar)


module.exports = router