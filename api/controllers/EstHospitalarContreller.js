const { EstHospitalarServices } = require('../services/index.js')
const estHopitalarServices = new EstHospitalarServices()


class EstHospitalarController {

    static async TodosEstHospitalar(req, res) {

        try{
            const EstHospitalar = await estHopitalarServices.pegaTodosOsRegistros()
            return res.status(200).json(EstHospitalar)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async UmEstHospitalar(req, res){
        const { id } = req.params
        
        try{
            const EstHospitalar = await estHopitalarServices.pegaUmRegistro(Number(id))
            return res.status(200).json(EstHospitalar)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async criarEstHospitalar(req, res) {
        const novaInfos = req.body

        try{
            const novoEstHospitalar = await estHopitalarServices.criarRegistro(novaInfos)
            return res.status(200).json(novoEstHospitalar)

        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async attEstHospitalar(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try{
            await estHopitalarServices.attRegistro(novasInfos, Number(id))
            const novoEstHospitalar = await database.EstHospitalar.findOne({ where : { id : id } })
            return res.status(200).json(novoEstHospitalar)


        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async deletarEstHospitalar(req, res) {
        const { id } = req.params

        try{
            await estHopitalarServices.deletarRegistro(Number(id))
            return res.status(200).json({ message : `EstHospitalar de id: ${id} deletado !` })
        
        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async restaurarEstHospitalar(req, res) {
        const { id } = req.params

        try{
            await estHopitalarServices.restaurarResgistro(Number(id))
            return res.status(200).json({ message : `Estagio Hospitalar de id: ${id}, restaurado!` })

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

}

module.exports = EstHospitalarController