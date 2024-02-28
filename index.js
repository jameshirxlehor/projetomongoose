const express = require('express'); // habilita a utilização do express para criação de api
const exphbs = require('express-handlebars'); // habilita a utilização de handlebars para uttilizar uma layout padrão


const app = express(); //estancia o objeto express para criação de rotas e midlewares


const conn = require('./db/conn'); //captura o modulo para acessar o banco de dados


const productRoutes = require('./routes/productsRoutes'); //importando modulo para acessar as rotas (GET,POST,PUT,...)


app.engine('handlebars',exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views','./views');


//responsável por fazer a leitura do body
app.use(
    express.urlencoded({
        extended: true,
    })
)


app.use(express.json());//habiliza o uso de JSON


app.use(express.static('public'));


app.use("/", productRoutes);


app.listen(3000); //habilita a porta que iremos utlizar no localhost


