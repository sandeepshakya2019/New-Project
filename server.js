//jshint esversion:6

//Setup the server

//require the npm packages express,mongoose,bodyparser,ejs
const express = require('express');
const bodyParser = require('body-parser');
// for mongoDB database
//const mongoose = require('mongoose');
const ejs = require('ejs');


//definning the app instance
const app = express();
//setting the view engine ejs (templating engine) (in view files)
app.set("view engine",'ejs');
// use the body parser for the post request
app.use(bodyParser.urlencoded({extended:true}));
//used to store the static files (html,css,js) (public directory)
app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("index");
})

//to listen at port 3000
app.listen(3000,function(){
	console.log("Running at Port 3000");
})