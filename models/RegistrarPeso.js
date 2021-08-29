const mongoose = require('mongoose');

let registrarPesoShema = new mongoose.Schema({
    fecha: {
        type:  String,
        default:true
    },
    peso: {
        type: String,
        default: false
    }
});

let RegistrarPeso = mongoose.model('RegistrarPeso', registrarPesoShema);

module.exports = RegistrarPeso;