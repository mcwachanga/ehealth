/**
 * Created by iam_wachanga on 11/10/15.
 */
var express = require('express');
var app = express();
var http = require('http');
var port = 3000;
var mysql = require('mysql');

// start server at specified port
app.listen(port, function () {
    console.log("Server started at port %s at %s",port, new Date());
});

//mysql configs
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Tryme2015',
    database : "kisumu_ehealth"
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
========================
 Routes implementation
========================
1. Hospitals
2. Dispensaries
3. Clinics
4. Staff
5. Equipments
 */
app.get('/dispensary', function(req, res){
    connection.query('SELECT * FROM `facilities` WHERE `type` = "Dispensary"', function (error, results, fields) {
        res.json(results);
    });
});

app.get('/clinics', function (req, res) {
    connection.query('SELECT * FROM `facilities` WHERE `type` = "Medical Clinic"', function (error, results, fields) {
        res.json(results);
    });
});

app.get('/hospitals', function(req, res){
    connection.query('SELECT * FROM `facilities` WHERE `type` = "District Hospital" OR ' +
        '`type` = "Sub-District Hospital" OR `type` = "Other Hospital" OR' +
        '`type` = "Provincial General Hospital"' , function (error, results, fields) {
        res.json(results);
    });
});

app.get('/homes', function(req, res){
    connection.query('SELECT * FROM `facilities` WHERE `type` = "Nursing Home"', function (error, results, fields) {
        res.json(results);
    });
});

app.get('/health-centres', function(req, res){
    connection.query('SELECT * FROM `facilities` WHERE `type` = "Health Centre"', function (error, results, fields) {
        res.json(results);
    });
});

app.get('/facility-types', function(req, res){
    connection.query('SELECT DISTINCT type FROM facilities', function (error, results, fields) {
        res.json(results);
    });
});

app.get('/facilities', function(req, res){
    connection.query('SELECT * FROM facilities', function (error, results, fields) {
        res.json(results);
    });
});


