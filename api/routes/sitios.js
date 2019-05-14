var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');



// /* GET users listing. */
router.get('/', function(req, res, next) {
    // Database Name
    const dbName = 'admin';
    const client = new MongoClient('mongodb://gonkicosmos:io3ChxxbY1AmKRtjmrW8LDVHF3zQF0b3Zs16c0CRdQsVHCNmVrFc9dTSJxFwfRwyIvOamqtrSJaftyImynRVLw==@gonkicosmos.documents.azure.com:10255/?ssl=true', { useNewUrlParser: true });


    //     // Use connect method to connect to the Server
    client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        console.log("is connected:::", client.isConnected())
        const db = client.db(dbName);
        // console.log(cursor)
        console.log("WE HAVE A CURSOR:::::::::::")

        function traerDatosSitios() {
            // // Get the documents collection
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
        }
        //This line was comment monday 13 may 10:21 pm
    });
});

module.exports = router;
//Traemos la funcion
exports.traerDatosSitios = traerDatosSitios;
//module.exports = conexion;