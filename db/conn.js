const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/projetonodemongo"

const client = new MongoClient(uri);

async function run() {
    try{
        await client.connect();
        console.log('Conexão com banco de dados criada com sucesso!')
    }catch(err){
        console.log(err);
    }
}

run();

module.exports = client;