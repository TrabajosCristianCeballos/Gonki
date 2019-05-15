import getSitios from 'eventos';
import getUser from 'users';
import getEventos from 'eventos';

export function connection() {
    var express = require('express');
    var router = express.Router();
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');

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
            // // Get the documents collection
    });
}