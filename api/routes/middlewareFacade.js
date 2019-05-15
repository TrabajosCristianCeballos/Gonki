//Clases de las api
var getSitios= require('./sitios');
var getUser = require('./users');
var getEventos = require('./eventos');

//Declarations
var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

router.get('/', function(req, res, next) {
  //const dbName = 'admin';
  //const client = new MongoClient('mongodb://gonkidb:9qYYn4fI0DlvyognnHF4Jl8JV5CN58d08aQ8vZyrcpNCwvLqDgls0tDH1z1iByU3gp0xBdNdbFH3a93rsnvtSA%3D%3D@gonkidb.documents.azure.com:10255/?ssl=true', { useNewUrlParser: true });

  let apiName = req.query.ANM;

  if(apiName == 'user'){
    console.log("user")
  }else if(apiName == 'sitios'){
    console.log("sitios")
  }else if(apiName == 'eventos'){
    console.log("eventos")
  }else{
    console.log("Error En la Matrix")
  }
});
module.exports = router;
