const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoutes.js')
const estagioH = require('./estHospitalarRouter.js')
const quartosClinicos = require('./quartoClinicoRoutes.js')
const cadastros = require('./cadastroRoutes.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        usuarios,
        estagioH,
        quartosClinicos,
        cadastros
    )
}