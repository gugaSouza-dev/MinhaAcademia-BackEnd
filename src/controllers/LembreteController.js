const Academia = require('../models/Academia');

module.exports = {

    async LembreteMensalidade(request, response) {
        const id = request.id;
        const academia = await Academia.findById(id);

        try {
            const alunos = await academia._doc.aluno;

            var listaAlunos = new Array();

            for (let i = 0; i < alunos.length; i++) {
                const mensalidade = alunos[i]._doc.mensalidade.status;
                if (mensalidade == false) {
                    listaAlunos.push(alunos[i]);
                }
            }
            return response.status(200).send({
                message: 'Estes alunos estao com a mensalidade atrasada', listaAlunos
            })
        } catch (error) {
            return response.status(400).send({
                error: 'Erro no lembrete de mensalidade'
            })
        }
    },
    async StatusMensalidade(request, response){
    }
}