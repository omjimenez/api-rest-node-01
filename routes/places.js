var express = require('express');
const Place = require('../models/Place');


let router = express.Router();

router.route('/')
.get()
.post()

router.route('/:id')
.get()
.put()
.delete()
  
module.exports = router;
