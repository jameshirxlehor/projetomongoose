const mongoose = require('mongoose');

async function main(){
   await mongoose.connect('mongodb://localhost:27017/projetomongoose');
   console.log('Conexão com o banco de dados usando Mongoose realizado com sucesso!')

}

main().catch((err)=> console.log(err));

module.exports = mongoose;