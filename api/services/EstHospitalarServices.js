const database = require('../models/index.js')
const Services = require('./Services.js')

class EstHospitalarServices extends Services {
    constructor(){
        super('EstHospitalar')
    }

}

module.exports = EstHospitalarServices