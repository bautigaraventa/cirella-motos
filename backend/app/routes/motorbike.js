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

//Create motorbike
router.post('/', (req, res) => {
  const motorbike = new Motorbike({
    name: req.body.name,
    year: req.body.year
  });
  motorbike.save((err) => {
    if (err) {
      res.status(500).send(err);
    } 
    else {
      res.send(motorbike);
    }
  });
});

//Update motorbike
router.put('/:id', async (req, res) => {
  // try {
  //   const update = await Motorbike.findOneAndUpdate({_id: req.params.id}, req.body, (err, doc, resp));
  //   res.send(doc);  
  // } catch (error) {
  //   res.status(500).send(error);
  // }
  Motorbike.findOneAndUpdate({_id: req.params.id}, req.body).then(eee => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(eee);
      res.send(eee);
    }    
  });  
});

module.exports = router;