const database = require('../models/index.js')
const Services = require('./Services.js')


class CadastroServices extends Services {
    constructor() {
        super('Cadastros')
    }

    async pegaUmCadastro(cadastroId, pacienteId) {
        return database.Cadastros.findOne({
            where: { id: cadastroId, paciente_id: pacienteId }
        })
    }

    async attRegistrosCadastro(dadosAtualizados, id, transacao = {}) {
        return database.Cadastros.update(dadosAtualizados, { where : { paciente_id : id } }, transacao)
    }

}

module.exports = CadastroServices