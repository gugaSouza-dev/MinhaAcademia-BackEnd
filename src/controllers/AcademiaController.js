const Academia = require('../models/Academia')

module.exports = {

    async GetAcademia(request, response) {
        const academia = await Academia.find();
        return response.json(academia);
    },

    async AddAcademia(request, response) {
        const { logo, nome_acad, tel, nome_resp, tel_resp, rua, numero,
            complemento, cep, cidade, estado, aluno } = request.body;

        const academia = await Academia.create({
            logo,
            nome_acad,
            tel,
            nome_resp,
            tel_resp,
            rua,
            numero,
            complemento,
            cep,
            cidade,
            estado,
            aluno
        })
        return response.json(academia)
    }
};


