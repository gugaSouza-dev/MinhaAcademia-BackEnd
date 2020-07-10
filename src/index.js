const express = require('express');
//Mongoose conecta a api com o Mongo
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

//Conexção com banco
mongoose.connect('mongodb+srv://minhaAcademia:minhaAcademia@minhaacademia.c23pv.mongodb.net/minhaAcademia?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use(routes);

app.listen(3333);