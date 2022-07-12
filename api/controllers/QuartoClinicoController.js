const { QuartoClinicoServices } = require('../services/index.js')
const quartoClinicoServices = new QuartoClinicoServices()

class QuartoClinicoController {

    static async TodosQuartosClinicos(req, res) {

        try{
            const QuartosClinicos = await quartoClinicoServices.pegaTodosOsRegistros()
            return res.status(200).json(QuartosClinicos)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async UmQuartoClinico(req, res){
        const { medicoId, quartoId } = req.params
        
        try{
            const quartoClinico = await quartoClinicoServices.pegaUmQuarto(
                Number(quartoId), Number(medicoId))
            return res.status(200).json(quartoClinico)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async criarQuartoClinico(req, res) {
        const novaInfos = req.body

        try{
            const novoQuartoClinico = await quartoClinicoServices.criarRegistro(novaInfos)
            return res.status(200).json(novoQuartoClinico)

        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async attQuartoClinico(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try{
            await quartoClinicoServices.attRegistro(novasInfos, Number(id))
            const novoQuartoClinico = await database.QuartosClinicos.findOne({ where : { id : id } })
            return res.status(200).json(novoQuartoClinico)


        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async deletarQuartoClinico(req, res) {
        const { id } = req.params

        try{
            await quartoClinicoServices.deletarRegistro(Number(id))
            return res.status(200).json({ message : `Quarto Clinico de id: ${id} deletado !` })
        
        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async restaurarQuartoClinico(req, res) {
        const { id } = req.params

        try{
            await quartoClinicoServices.restaurarResgistro(Number(id))
            return res.status(200).json({ message: `Quarto Clinico de id: ${id} restaurado!` })

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

}

module.exports = QuartoClinicoController