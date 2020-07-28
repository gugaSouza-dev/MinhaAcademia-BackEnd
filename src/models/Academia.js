const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AcademiaSchema = new mongoose.Schema({

    //https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose
    // logo: {data: Buffer, contentType: String},
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    senha: {
        type: String,
        required: true
    },
    adm: Boolean,
    nome_acad: String,
    nome_resp: String,
    tel_resp: String,
    tel_acad: String,
    rua: String,
    numero: Number,
    complemento: String,
    cep: String,
    cidade: String,
    estado: String,
    aluno: [{
        //numero do registro na academia
        num_reg_acad: Number,
        nome: String,
        tel: String,
        nome_resp: String,
        tel_resp: String,
        data_nascimento: Date,
        //dia do vencimento da mensalidade
        data_matricula: Date,
        ativo: Boolean,
        modalidade: {
            type: String,
            lowercase: true
        },
        mensalidadeVenc: Date,
        mensalidadeValor: Number,
        mensalidadeStatus: {
            type: Boolean,
            default: true
        },
    }]
});

AcademiaSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
});

module.exports = mongoose.model('Academia', AcademiaSchema);