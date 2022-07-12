const database = require('../models/index.js')
const Services = require('./Services.js')

class UsuariosServices extends Services {
    constructor() {
        super('Usuarios')
        this.cadastros = new Services('Cadastros')
    }


    async cancelarPacienteECadastro(pacienteId) {
        return database.sequelize.transaction(async transacao => {
            await super.attRegistro({ ativo: false }, pacienteId, {
                transaction: transacao
            })

            await this.cadastros.attRegistros({ status: 'fechado' }, { paciente_id: pacienteId }, {
                transaction: transacao
            })

        })
    }

    async pegaTodosOsUsuarios() {
        return database.Usuarios.scope('todos').findAll()
    }

}

module.exports = UsuariosServices