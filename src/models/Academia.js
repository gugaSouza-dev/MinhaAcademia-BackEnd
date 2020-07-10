const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AcademiaSchema = new mongoose.Schema({
    
    //https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose
    // logo: {data: Buffer, contentType: String},
    email: {type: String, required: true, lowercase: true},
    senha: {type: String, required: true, select: false},
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
    aluno : [{
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
        modalidade: String,
        mensalidade: [{ 
            valor:  Number,
            //pago ou atrasado
            status: Boolean
        }]
    }]
});

AcademiaSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;

    next();
});

module.exports = mongoose.model('Academia', AcademiaSchema);
