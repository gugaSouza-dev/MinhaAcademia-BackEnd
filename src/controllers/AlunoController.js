const Academia = require('../models/Academia');

module.exports = {

    async AddAluno(request, response) {
        try {
            const id = request.id;
            const body = request.body;
            const academia = await Academia.findById(id);

            const alunoReturn = await academia._doc.aluno;

            alunoReturn.push(body);
            academia.save(function(err) {
                if(err) return err;
            });

            return response.send(alunoReturn)

        } catch (error) {
            console.log(error);
            return response.status(400).send({
                error: 'Erro na criação do aluno'
            })
        }
    },

    //Busca os alunos
    async GetAluno(request, response) {
        //Busca a academia pelo id enviado
        const id = request.id;
        const academia = await Academia.findById(id);

        const alunoReturn = await academia._doc.aluno;


        return response.json(alunoReturn);
    },


    async GetAlunoById(request, response) {

        const id = request.id;
        const academia = await Academia.findById(id);

        //Constante usada para armazenar os alunos
        const alunosEncontrados = [];

        const alunosReturn = academia._doc.aluno;

        Object.assign(alunosEncontrados, alunosReturn);

        const idAluno = {
            _id: request.params.idAluno
        };
        const aluno = alunosEncontrados.find(x => x.idAluno === alunosEncontrados.id);


        return response.json(aluno);
    }
}