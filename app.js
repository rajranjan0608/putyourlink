var express         = require('express');
const ejs           = require("ejs");

var app = express();

var PORT = 3000;

app.get('/', function(req,res){
    res.redirect('/index');
});

app.get('/index', function(req,res){
    res.render('index.ejs');
});

var server=app.listen(process.env.PORT || PORT, () => {
    console.log("Running on " + PORT);
});