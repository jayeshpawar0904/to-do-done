const router = require('express').Router();

let exercise = require('../Models/excersie.model');


router.route('/:label').get((req,res)=>{
    
    exercise.find({username:req.params.label})
    .then(exercise=> res.json(exercise))
    .catch(err=>res.status(400).json('Error'+err));
});


module.exports = router