var mongoose = require('mongoose');
var Motorbike = mongoose.model('motorbike');
var router = require('express').Router()

//Get all motorbikes
router.get('/', (req, res, next) => {
  Motorbike.find((err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    else if (result.length != 0) {
      res.json(result);
    }
    else {
      res.send("No motorbike was found!");
    }
  });
});

//Get one motorbike by id
router.get('/:id', (req, res, next) => {
    Motorbike.findOne({_id: req.params.id}, function (err, result) {
      if (err) {
        res.status(500).send(err);
      } 
      if(result) {
        res.json(result);
      } 
      else {
        res.send("No motorbike was found with this id!");
      } 
    });
});

module.exports = router;