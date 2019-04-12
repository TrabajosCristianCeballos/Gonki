var express = require('express');
var Evento = require('../schemasdbs/Eventos')
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const findDocuments = function(db, callback) {


}

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Database Name
    const dbName = 'admin';
    const client = new MongoClient('mongodb://gonkicosmos:io3ChxxbY1AmKRtjmrW8LDVHF3zQF0b3Zs16c0CRdQsVHCNmVrFc9dTSJxFwfRwyIvOamqtrSJaftyImynRVLw==@gonkicosmos.documents.azure.com:10255/?ssl=true', { useNewUrlParser: true });


    // Use connect method to connect to the Server
    client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        console.log("is connected:::", client.isConnected())
        const db = client.db(dbName);

        // console.log(cursor)
        console.log("WE HAVE A CURSOR:::::::::::")

        // // Get the documents collection
        const collection = db.collection('Usuarios');

        // // Find some documents
        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);
            // assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs)
            res.send(docs);
            client.close();
        });
    });
});



module.exports = router;