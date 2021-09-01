const Place = require('../models/Place');
const upload = require('../config/upload');
const uploader = require('../models/Uploader');


// Implementar una funcion Middleware
function find(req, res, next){
  Place.findById(req.params.id)
    .then( place => {
      req.place = place;
      next();
    } )
    .catch( err =>{
      next(err);
    });
}

function index(req, res){
    // todos los lugares
    Place.find({}).then(docs => {
      res.json(docs);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    })   
}

function create(req, res, next){
    // Crear nuevos lugares
    Place.create({
        title: req.body.title,
        description: req.body.description,
        acceptsCreditCard: req.body.acceptsCreditCard,
        openHour: req.body.openHour,
        closeHour: req.body.closeHour
      }).then( doc =>{
         res.json(doc)
        req.place = doc;
        next();
      }).catch(err => {
        // console.log(err)
        next(err);
      });
}

function show(req, res){
    // Busqueda individual
    res.json(req.place);

  /*Place.findById(req.params.id)
    .then(doc =>{
    res.json(doc);
    })
    .catch(err => {
    console.log(err);
    res.json(err);
    
    })
  */
}

function update(req, res){
    // Actualizar un recurso
    let placeParams = {};
    let attributes = ['title', 'description', 'acceptsCreditCard', 'openHour', 'closeHour'];
  
    attributes.forEach(attr => {
      if (Object.prototype.hasOwnProperty.call(req.body, attr))
        placeParams[attr] = req.body[attr]
  
    })
  
  
    req.place = Object.assign(req.place, placeParams);
    req.place.save();
    Place.findOneAndUpdate({'_id': req.params.id}, placeParams, {new: true})
    .then(doc =>{
      res.json(doc);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    })
}

function destroy(req, res){
    // Eliminar recursos
  /* Place.findByIdAndDelete(req.params.id)*/
  req.place.remove()
    .then(doc => {
      res.json({});
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    })
}

function multerMiddleware(){
  return upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'conver', maxCount: 1 }
  ]);
}

function saveImage(req, res) {
  if(req.place){
      if(req.files && req.files.avatar) {
        const path = req.files.avatar[0].path;
        uploader(path)
        .then( result => {
          console.log(result);
          res.json(req.place);
        })
        .catch(err => {
          console.log(err);
          res.json(err);
        })
      }
  } else {
      res.status(442).json({
        error: req.error || 'Colud not save place'
      });
  }
}


module.exports = {index,create,show,update,destroy,find,multerMiddleware, saveImage};

