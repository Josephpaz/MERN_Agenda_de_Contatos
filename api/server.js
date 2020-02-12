const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const contactRoute = require('./contact.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=>{console.log('Conectado com o Banco de Dados')},
    err=>{console.log('Erro ao Conectar com o banco de dado '+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/contact', contactRoute);

app.listen(PORT, () =>{
    console.log('Servidor na Porta: ',PORT);
});