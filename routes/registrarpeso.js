var express = require('express');
const Registropeso = require('../models/RegistrarPeso');
const RegistroPesoContoller = require('../controllers/RegistroPesoController');

let router = express.Router();

router.route('/')
.post(RegistroPesoContoller.create)


module.exports = router;