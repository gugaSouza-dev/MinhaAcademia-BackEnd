const Academia = require('../models/Academia');

module.exports = {

    //Adiciona uma nova academia
    async AddAcademia(request, response) {
        try {
            const id = request.id;
            const body = request.body;

            const academia = await Academia.findByIdAndUpdate(id, body);

            return response.json(academia)
        } catch (error) {
            return response.status(400).send({
                error: 'Erro na criacao da academia'
            })
        }

    },

    //Retorna os dados da academia atual
    async DadosAcademia(request, response) {
        const id = request.id;
        try {
            const academia = await Academia.findById(id);

            return response.send(academia);
        } catch (error) {
            return response.status(400).send({
                error: 'Erro na listagem de dados'
            })
        }
    },

    //Atualiza uma academia
    //Retorno nao otimizado
    async UpdateAcademia(request, response) {
        const id = request.id;

        try {
            const body = request.body;

            const academia = await Academia.findByIdAndUpdate(id, body);

            return response.send({
                message: 'Academia atualizada com sucesso',
                academia
            });
        } catch (error) {
            console.log(error)
            return response.status(400).send({
                error: 'Erro na atualizaçao da academia'
            })
        }

    },

    //Deleta academia atual
    async DeleteAcademia(request, response) {
        const id = request.id;
        try {
            const deleteAcademia = await Academia.findByIdAndRemove(id);

            return response.status(200).send({
                message: 'Academia deletada com sucesso',
                deleteAcademia
            });
        } catch (error) {
            return response.status(400).send({
                error: 'Erro ao deletar academia'
            })
        }
    }
};