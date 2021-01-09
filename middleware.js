const moment = require('moment')

//create a custom middleware
const logger = function (req,res,next){
    // console.log(`${req.protocol}://${req.get('host')}
    // ${req.originalUrl} : ${moment().format()} //// `);
    console.log(Date.now());

    /// check if the day is not saturday & sunday and the time is between 9am to 5pm
    next();
}

module.exports = logger