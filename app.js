var express         = require('express');
var ejs             = require("ejs");
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var link            = require('./models/linkInput');

require('dotenv').config();

var app = express();

var PORT = 3000;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoURI="mongodb://localhost/putyourlink";
// mongoURI=process.env.MONGOURI;

mongoose.connect(mongoURI,{useNewUrlParser: true});

app.get('/', function(req,res){

    res.redirect('/index');
});

app.get('/index', function(req,res){
    
    link.find({}, function(err, linkinputs){
        if(req.query.pass=='iamrajranjan'){
            res.render('index.ejs', {linkinputs:linkinputs, isAdmin:true});
        }else{
            res.render('index.ejs', {linkinputs:linkinputs, isAdmin:false});
        }
    });
});

app.get('/signup', function(req,res){
    
    res.render('signup.ejs');
    
});

app.post('/signup', function(req,res){
   
    
    
});

app.post('/linkInput', function(req,res){

    link.create(req.body.linkInput);

    res.redirect('/');

});

var server=app.listen(process.env.PORT || PORT, () => {
    console.log("Running on " + PORT);
});
