const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mysql = require('mysql');

var mc = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@123',
    database:'employee_details'
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



