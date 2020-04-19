const Academia = require('../models/Academia');


module.exports = {

    async AddAluno(request, response) {
        const id = { _id: request.params.id };
        const academia = await Academia.findById(id);
        console.log(academia);


        // const { aluno , num_reg_acad, nome, tel, nome_resp, tel_resp,
        //     data_nascimento, dia_venc_mensal, data_matricula,
        //     ativo, modalidade, mensalidade, valor, status } = request.body;

        //     const alunoCriado = await academia.create({
        //     aluno, num_reg_acad, nome, tel, nome_resp, tel_resp,
        //     data_nascimento, dia_venc_mensal, data_matricula,
        //     ativo, modalidade, mensalidade, valor, status
        // })

        // const alunoCriado = Academia.create({
        //     aluno: request.body.aluno,
        //     nome: request.body.nome,
        //     tel: request.body.tel
        // });

        return response.json(alunoCriado);
    },

    //Busca os alunos
    async GetAluno(request, response) {
        //Busca a academia pelo id enviado
        const id = { _id: request.params.id };
        const academia = await Academia.findById(id);

        //Constante usada para armazenar os alunos
        const alunosEncontrados = [];

        //???
        //Busca dentro da academia os alunso e os retorna
        for (const key in academia) {
            if (academia.hasOwnProperty(key)) {
                if (academia.aluno !== null) {
                    const alunoReturn = academia.aluno;
                    //Atribui alunoReturn ao alunosEncontrados
                    Object.assign(alunosEncontrados, alunoReturn);
                }
            }
        }
        return response.json(alunosEncontrados);
    },
    async GetAlunoById(request, response) {

        const idAcademia = { _id: request.params.idAcademia };
        const academia = await Academia.findById(idAcademia);

        //Constante usada para armazenar os alunos
        const alunosEncontrados = [];

        //???
        //Busca dentro da academia os alunso e os retorna
        for (const key in academia) {
            if (academia.hasOwnProperty(key)) {
                if (academia.aluno !== null) {
                    const alunosReturn = academia.aluno;

                    //Atribui alunoReturn ao alunosEncontrados
                    Object.assign(alunosEncontrados, alunosReturn);
                }
            }
        }
        const idAluno = { _id: request.params.idAluno};
        const aluno = alunosEncontrados.find(x => x.idAluno === alunosEncontrados.id);


        return response.json(aluno);
    }
}

