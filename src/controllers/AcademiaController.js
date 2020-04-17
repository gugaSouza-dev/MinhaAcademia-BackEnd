const Academia = require('../models/Academia');


module.exports = {
    //Lista todas as academias
    async GetAcademia(request, response) {
        const academia = await Academia.find();
        return response.json(academia);
        
    },
    
    
    //Busca academia por id
    async GetAcademiaById(request, response) {

        const id = { _id: request.params.id };
        const academia = await Academia.findById(id);

        return response.json(academia);
    },


    //Adiciona uma nova academia
    async AddAcademia(request, response) {
        const { logo, nome_acad,tel_acad, tel_resp, nome_resp,  rua, numero,
            complemento, cep, cidade, estado, aluno } = request.body;

        const academia = await Academia.create({
            logo,
            nome_acad,
            nome_resp,
            tel_resp,
            tel_acad,
            rua,
            numero,
            complemento,
            cep,
            cidade,
            estado,
            aluno
        })
        return response.json(academia)
    },

    //Atualiza uma academia
    async UpdateAcademia(request, response) {
        
        const { nome_acad,  nome_resp, tel_resp,tel_acad, rua, numero,
            complemento, cep, cidade, estado } = request.body;
            
            const updateAcademia =  await Academia.updateOne({
                
                nome_acad,
                nome_resp,
                tel_resp,
                tel_acad,
                rua,
                numero,
                complemento,
                cep,
                cidade,
                estado
            })
            
            //Arrumar o retorno
            return response.json(updateAcademia);

    },

    //Deleta uma academia
    async DeleteAcademia(request, response){

        const id = { _id: request.params.id };

        const deleteAcademia = await Academia.findByIdAndRemove(id);

        return response.json(deleteAcademia);
    }
};


