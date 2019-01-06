var mongoose = require('mongoose');
// var Motorbike = mongoose.model('motorbike');
var router = require('express').Router()

//Get all motorbikes
router.get('/', (req, res, next) => {
    console.log("Get all motorbikes!");
    res.send("Get all motorbikes!");
//   Motorbike.find(function (err, result) {
//     if (err) {
//       res.status(500).send(err);
//     }
//     else if (result.length != 0) {
//       res.json(result);
//     }
//     else {
//       res.send("No motorbike was found!");
//     }
//   });
});

module.exports = router;