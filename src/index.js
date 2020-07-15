const express = require('express');
//Mongoose conecta a api com o Mongo
const mongoose = require('mongoose');
const routes = require('./routes');



const app = express();

//Conexção com banco
mongoose.connect('mongodb+srv://minhaAcademia:minhaAcademia@minhaacademia.c23pv.mongodb.net/MinhaAcademia?authSource=admin&replicaSet=atlas-zi3bfy-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use(routes);

app.listen(3333);