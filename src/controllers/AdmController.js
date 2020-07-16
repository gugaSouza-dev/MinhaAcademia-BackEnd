const Academia = require('../models/Academia');

module.exports = {

    //Lista todas as academias
    async ListaAcademia(req, res) {
        const adm = req.adm;
        if (!adm)
            return res.status(401).send({
                error: 'Usuario nao autorizado'
            });

        try {

            const academia = await Academia.find();
            return res.send(academia)

        } catch (error) {

            return res.status(400).send({
                error: 'Erro na pesquisa de academias'
            })
        }
    },

    //Busca academia por id
    async GetAcademiaById(request, response) {
        const adm = request.adm;
        if (!adm)
            return res.status(401).send({
                error: 'Usuario nao autorizado'
            });

        try {

            const id = {
                _id: request.params.id
            };
            const academia = await Academia.findById(id);

            return response.json(academia);
        } catch (error) {
            return response.status(400).send({
                error: 'Erro na pesquisa de academia'
            })
        }

    },
    //Deleta uma academia
    async DeletaQualquerAcademia(request, response) {
        const adm = request.adm;
        if (!adm)
            return res.status(401).send({
                error: 'Usuario nao autorizado'
            });
        try {
            const id = {
                _id: request.params.id
            };

            const deleteAcademia = await Academia.findByIdAndRemove(id);

            return response.status(200).send({
                message: 'Academia deletada com sucesso',
                deleteAcademia
            });

        } catch (error) {
            return response.status(400).send({
                error: 'Erro no delete de academia'
            });
        }
    }
}