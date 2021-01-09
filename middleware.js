const moment = require('moment')

//create a custom middleware
const logger = function (err,req,res,next){

    let d =  new Date();
    let day = d.getDay();
    let hour = d.getHours();

    if((day === 6 || day === 0) && !(hour >= 9 && hour <= 17)){
        console.error(err.stack)
        res.status(500).send('<h1>The website is not available at this time!</h1>')
        console.log("Day is :"+d.getDay());
        console.log("time is :"+d.getHours());
    }

    /// check if the day is not saturday & sunday and the time is between 9am to 5pm
    next();
}

module.exports = logger