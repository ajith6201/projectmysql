const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var mc = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bookmyhall'
});

mc.connect();

port = process.env.PORT || 3000;
//const port = config.PORT || process.env.PORT || 3000;
app.listen(port);
console.log("Server Running at.."+port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var routes = require('./app/routes/appRouter');
routes(app);