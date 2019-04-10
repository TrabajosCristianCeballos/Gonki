const mongoose =require('mongoose');
const env = require('env');
mongoose.Promise=global.Promise;



function connect(){
  return mongoose.connect(mongoUri, {useMongoClient: true})

}

const mongoUri = 'mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmoPort}/?ssl=true';


module.exports ={
    connect,
    mongoose
};
