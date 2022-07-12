const database = require('../models/index.js')
const Services = require('./Services.js')

class QuartoClinicoServices extends Services {
    constructor() {
        super('QuartosClinicos')
    }

    async pegaUmQuarto(quartoId, medicoId) {
        return database.QuartosClinicos.findOne({
            where : {
                 id : quartoId , medico_id : medicoId }})
    }

}

module.exports = QuartoClinicoServices