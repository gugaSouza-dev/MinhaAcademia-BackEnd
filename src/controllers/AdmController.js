const Academia = require('../models/Academia');
const authMiddleware = require('../middlewares/auth');

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
}