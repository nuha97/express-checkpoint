const express = require('express');
const router = express.Router();

//Hompe page route
router.get('/',(req,res)=>res.render('index'))

//About page route
router.get('/About',(req,res)=>res.render('About'))

//services page route
router.get('/services',(req,res)=>res.render('services'))

module.exports = router