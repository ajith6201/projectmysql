'use strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@123',
    database:'employee_details'
});

connection.connect((err)=>{
    if(err) throw err;
});

module.exports = connection;