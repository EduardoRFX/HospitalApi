const { CadastroServices } = require('../services/index.js')
const cadastroServices = new CadastroServices()

class CadastroController {

    static async TodosCadastros(req, res) {

        try{
            const cadastros = await cadastroServices.pegaTodosOsRegistros()
            return res.status(200).json(cadastros)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async UmCadastro(req, res){
        const { pacienteId, cadastroId } = req.params
        
        try{
            const cadastro = await cadastroServices.pegaUmCadastro(
                Number(cadastroId), Number(pacienteId))
            return res.status(200).json(cadastro)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async criarCadastro(req, res) {
        const { pacienteId } = req.params
        const novaInfos = {...req.body, paciente_id: Number(pacienteId)}

        try{
            const novoCadastro = await cadastroServices.criarRegistro(novaInfos)
            return res.status(200).json(novoCadastro)

        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async attCadastro(req, res) {
        const { pacienteId } = req.params
        const novasInfos = req.body

        try{
            const novoCadastro = await cadastroServices.attRegistrosCadastro(
                novasInfos, Number(pacienteId))
            return res.status(200).json({
                 message : 
                 `Cadastro com o id de paciente: ${pacienteId} atualizado!` })


        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async deletarCadastro(req, res) {
        const { id } = req.params

        try{
            await cadastroServices.deletarRegistro(Number(id))
            return res.status(200).json({ message : `Cadastro de id: ${id} deletado !` })
        
        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async restauraCadastro(req, res) {
        const { id } = req.params

        try{
            await cadastroServices.restaurarResgistro(Number(id))
            return res.status(200).json({ message : `Cadastro de id: ${id}, restaurado!` })

        }catch(err){
            return res.status(500).json({err: err})
        }
    }

}

module.exports = CadastroController