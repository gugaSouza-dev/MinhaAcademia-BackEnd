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

    async GetAluno(request, response){
        const id = { _id: request.params.id };
        const academia = await Academia.findById(id);

        for (const key in academia) {
            if (academia.hasOwnProperty(key) ) {
                const aluno = academia[key];
                if(academia.aluno !== null)
                {
                    const alunoReturn = academia.aluno;
                    return response.json(alunoReturn)
                }

            }   
        }
        


        return response.json(academia);
    }


}

