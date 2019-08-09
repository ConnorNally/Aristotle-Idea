const express = require("express");
const bodyParser = require("body-parser");
const jquery = require("jquery");
const canvas =require("canvas-api");
const router = express.Router();

const app = express();
var path = require('path')

  
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("The application is running on localhost:3000!");
  });