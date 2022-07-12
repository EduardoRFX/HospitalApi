const database = require('../models/index.js')

class Services {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo].findAll({...where})
    }

    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo].findOne({ where : {id : id} })
    }

    async criarRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async attRegistro(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo].update(dadosAtualizados, { where: {id : id} }, transacao)
    }
    
    async attRegistros(dadosAtualizados, where, transacao = {}) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { ...where } }, transacao)
    }

    async deletarRegistro(id) {
        return database[this.nomeDoModelo].destroy({ where : { id : id } })
    }

    async restaurarResgistro(id) {
        return database[this.nomeDoModelo].restore({ where : { id : id } })
    }
}

module.exports = Services