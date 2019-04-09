
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('RESPUESTA DE EXPRESS');
});

module.exports = router;
