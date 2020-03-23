const express = require('express');
const mongoose = require('mongoose');


const AcademiaSchema = new mongoose.Schema({
    //https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose
    logo: {data: Buffer, contentType: String},
    nome_acad: String,
    nome_resp: String,
    tel_resp: String,
    tel_acad: String ,
    rua: String,
    numero: Number,
    complemento: String,
    cep: String,
    cidade: String,
    estado: String,
});

module.exports = mongoose.model('Academia', AcademiaSchema);