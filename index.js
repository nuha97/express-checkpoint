const express = require('express');
const path = require('path')
const app = express();
const logger = require('./middleware')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000;

//use all files and directory in views folder
app.use(express.static(path.join(__dirname, '/views')));
//init middleware
app.use(logger)

//handlebar middileware 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//use router to manage routes easily
app.use('/', require('./router'))

app.listen(PORT,()=>console.log("server started on port 3000"));