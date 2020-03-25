const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const AlunoSchema = new mongoose.Schema({
    //numero do registro na academia
    num_reg_acad: Number,
    nome: String,
    tel: String,
    nome_resp: String,
    tel_resp: String,
    data_nascimento: Date,
    //dia do vencimento da mensalidade
    dia_venc_mensal: Number,
    data_matricula: Date,
    ativo: Boolean,
    modalidade: String
});

module.exports = mongoose.model('Aluno', AlunoSchema);