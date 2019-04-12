var moongose = require('mongoose');

var EventosSchema = moongose.Schema({
    nombre: String,
    organizadores: Array,
    descripcion: String,
    horaInicio: Date,
    fecha: Date,
    idiomas: Array,
    sitios: Array
})

// the schema is useless so far
// we need to create a model using it
var Evento = moongose.model('Evento', EventosSchema);

// make this available to our users in our Node applications
module.exports = Evento;