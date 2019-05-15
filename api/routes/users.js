function getUser(){
  //Declarations
  var express = require('express');
  var router = express.Router();
  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  /* GET users listing. */
  router.get('/', function(req, res, next) {
     // Database Name
     const dbName = 'admin';
     const client = new MongoClient('mongodb://gonkidb:9qYYn4fI0DlvyognnHF4Jl8JV5CN58d08aQ8vZyrcpNCwvLqDgls0tDH1z1iByU3gp0xBdNdbFH3a93rsnvtSA%3D%3D@gonkidb.documents.azure.com:10255/?ssl=true', { useNewUrlParser: true });
     // Use connect method to connect to the Server
     client.connect(function(err) {
         assert.equal(null, err);
         console.log("Connected successfully to server");
         console.log("is connected:::", client.isConnected())
         const db = client.db(dbName);
         // console.log(cursor)
         console.log("WE HAVE A CURSOR:::::::::::")
         //function traerDatosUsers() {
         const collection = db.collection('Usuarios');
         // // Find some documents method
         collection.find({}).toArray((err, docs) => {
             assert.equal(err, null);
             // assert.equal(err, null);
             console.log("Found the following records");
             console.log(docs)
             res.send(docs);
             //res.send(docs);
             client.close();
         });
     });
  });
}

module.exports = getUser;
