const express = require('express');
const router = express.Router();

//Hompe page route
router.get('/',(req,res)=>res.render('index'))

//About page route
router.get('/About',(req,res)=>res.render('About'))

//services page route
router.get('/services',(req,res)=>res.render('services'))

//midlleware time checking
router.get('/', (req, res, next) => {
    next(new Error('The web application is only available in working time (Monday to Friday,  from 9 to 17) '));
  });
module.exports = router