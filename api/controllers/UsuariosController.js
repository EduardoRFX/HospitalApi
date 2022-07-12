const { UsuariosServices } = require('../services/index.js')
const usuariosServices = new UsuariosServices()

class UsuariosController {

    static async pegaUsuariosAtivos(req, res) {

        try{
            const usuarios = await usuariosServices.pegaTodosOsRegistros()
            return res.status(200).json(usuarios)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async pegaTodosUsuarios(req, res) {

        try{
            const usuarios = await usuariosServices.pegaTodosOsUsuarios()
            return res.status(200).json(usuarios)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async UmUsuario(req, res){
        const { id } = req.params
        
        try{
            const usuario = await usuariosServices.pegaUmRegistro(Number(id))
            return res.status(200).json(usuario)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async criarUsuario(req, res) {
        const novaInfos = req.body

        try{
            const novoUsuario = await usuariosServices.criarRegistro(novaInfos)
            return res.status(200).json(novoUsuario)

        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async attUsuario(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try{
            await usuariosServices.attRegistro(novasInfos, Number(id))
            const novoUsuario = await usuariosServices.pegaUmRegistro(Number(id))
            return res.status(200).json(novoUsuario)


        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async cancelarCadastro(req, res) {
        const { pacienteId } = req.params

        try{
            await usuariosServices.cancelarPacienteECadastro(Number(pacienteId))
            return res.status(200).json({ message : `Cadastro ref. ao paciente de id: ${pacienteId} cancelados!` })

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async deletarUsuario(req, res) {
        const { id } = req.params

        try{
            await usuariosServices.deletarRegistro(Number(id))
            return res.status(200).json({ message : `Usuario de id: ${id} deletado !` })
        
        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async restaurarUsuario(req, res) {
        const { id } = req.params

        try{
            await usuariosServices.restaurarResgistro(Number(id))
            return res.status(200).json({ message : `Usuario de id: ${id}, restaurado!` })

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

}

module.exports = UsuariosController