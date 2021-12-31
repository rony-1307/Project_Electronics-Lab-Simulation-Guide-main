const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://admin:admin@cluster0.gbrsu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(result=>{
        console.log(result);
        callback(result);
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports = mongoConnect;