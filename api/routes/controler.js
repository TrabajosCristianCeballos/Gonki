export function getSitios() {

    // /* GET sitios listing. */
    router.get('/', function(req, res, next) {
        //Declarations
        var express = require('express');
        var router = express.Router();
        const MongoClient = require('mongodb').MongoClient;
        const assert = require('assert');

        const collection = db.collection('Sitios');
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
    module.exports = router;
}

export function getUser() {

    /* GET users listing. */
    router.get('/', function(req, res, next) {
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
    module.exports = router;
}

export function getEventos() {

    // /* GET eventos listing.*/
    router.get('/', function(req, res, next) {
        const collection = db.collection('Eventos');
        // Find some documents
        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs)
            res.send(docs);
            //Close the connection
            client.close();
        });

    });
    module.exports = router;
}