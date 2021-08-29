const RegistrarPeso = require('../models/RegistrarPeso');

function create(req, res){
    // Insertar Peso
    RegistrarPeso.create({
       fecha: req.body.fecha,
       peso:  req.body.peso
    })
    .then( doc => {
        res.json(doc)
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}

module.exports = {create}