const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express(); //variaveis const(constante pois não serão alteradas, valor fixo)
mongoose.connect('mongodb://Oministack:<endboy12>@cluster0-shard-00-00-bqbyc.mongodb.net:27017,cluster0-shard-00-01-bqbyc.mongodb.net:27017,cluster0-shard-00-02-bqbyc.mongodb.net:27017/projeto?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

//MÉTODOS HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

//Query Params: request.query (filtros, ordenação, paginação,...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de registo)

//MongoDB (Não-relaciona)


app.listen(3333);