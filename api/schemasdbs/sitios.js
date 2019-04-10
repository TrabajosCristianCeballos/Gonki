var moongose = require('monogoose');

var sitiosSchema = moongose.Schema({
  nombre: String,
  direcciones:{
    DIRECCION1: String,
    DIRECCION2: String
  },
  descripcion: String,
  horario: String,
  Calificacion:{
    {
    user: String,
    calificacion: Number,
    Comentario: String
  },
  {
    user:String,
    calificacion:Number,
    comentario: String
  }

     }

})
