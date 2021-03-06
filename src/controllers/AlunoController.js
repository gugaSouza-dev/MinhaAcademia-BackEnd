const Academia = require('../models/Academia');
const _ = require('lodash');

module.exports = {

    //Adiciona aluno
    async AddAluno(request, response) {
        const id = request.id;
        const body = request.body;
        const academia = await Academia.findById(id);
        try {

            const alunoReturn = await academia._doc.aluno;

            alunoReturn.push({
                nome: body.nome,
                tel: body.tel,
                nome_resp: body.nome_resp,
                tel_resp: body.tel_resp,
                data_nascimento: body.data_nascimento,
                data_matricula: Date.now(),
                ativo: body.ativo,
                modalidade: body.modalidade,
                mensalidadeVenc: body.mensalidadeVenc,
                mensalidadeValor: body.mensalidadeValor,
                mensalidadeStatus: body.mensalidadeStatus,
            });
            academia.save();

            return response.send(academia)

        } catch (error) {
            console.log(error);
            return response.status(400).send({
                error: 'Erro na criação do aluno'
            })
        }
    },

    //Busca todos os alunos
    async GetAluno(request, response) {
        try {

            const id = request.id;
            const academia = await Academia.findById(id);

            const alunoReturn = await academia._doc.aluno;

            return response.json(alunoReturn);
        } catch (error) {

        }
    },

    //Busca aluno por id
    async GetAlunoById(request, response) {

        const id = request.id;
        const academia = await Academia.findById(id);
        try {

            //Constante usada para armazenar os alunos
            const alunosEncontrados = [];
            const alunosReturn = academia._doc.aluno;
            Object.assign(alunosEncontrados, alunosReturn);

            const idAluno = {
                _id: request.params.idAluno
            };
            const aluno = alunosEncontrados.find(x => x.idAluno === alunosEncontrados.id);

            return response.json(aluno);
        } catch (error) {
            console.log(error);
            return response.status(400).send({
                error: 'Erro na busca do aluno'
            })
        }
    },

    //Atualiza um aluno
    async AlteraAluno(request, response) {
        const id = request.id;
        const academia = await Academia.findById(id);
        const idAluno = request.params.idAluno;
        const body = request.body;

        try {
            //Atribuindo o 'alunosReturn' no array 'alunosEncontrados' me permite usar o .find()
            const alunosEncontrados = [];
            const alunosReturn = academia._doc.aluno;
            Object.assign(alunosEncontrados, alunosReturn);

            //Uso o .find() para pesquisar dentro dos alunos ja cadastrados e retornar o aluno que tenha o Id desejado
            const aluno = await alunosEncontrados.find(x => x.idAluno === alunosEncontrados.id);
            if (aluno._id == idAluno) {

                const alunoAtt = _.merge(aluno, body)
                academia.save();
                return response.send({
                    alunoAtt
                })

            } else return response.send({
                message: 'Aluno nao encontrado'
            })

        } catch (error) {
            console.log(error);
            return response.status(400).send({
                error: 'Erro na atualizaçao do aluno'
            })
        }
    },

    //Deleta um aluno
    async DeleteAluno(request, response) {

        const id = request.id;
        const academia = await Academia.findById(id);
        const idAluno = request.params.idAluno;
        if (idAluno == null) return response.status(400).send({
            error: 'Id enviado nao encontrado'
        });
        try {

            //Atribuir o 'alunosReturn' no array 'alunosEncontrados' me permite usar o .find()
            const alunosEncontrados = [];
            const alunosReturn = academia._doc.aluno;
            Object.assign(alunosEncontrados, alunosReturn);

            //Uso o .find() para pesquisar dentro dos alunos ja cadastrados e retornar o aluno que tenha o Id desejado
            const aluno = await alunosEncontrados.find(x => x.idAluno === alunosEncontrados.id);
            if (aluno == null) return response.status(404).send({
                error: 'Aluno nao existe'
            })

            //Aqui checo mais uma vez se o Id do aluno bate com o Id desejado e entao apago o registro
            if (aluno._id == idAluno) {
                await alunosReturn.remove(aluno);
                academia.save();
                return response.status(200).send({
                    message: 'Aluno apagado com sucesso',
                    aluno
                });
            } else return response.status(404).send({
                error: 'Aluno nao encontrado'
            })

        } catch (error) {
            console.log(error);
            return response.status(400).send({
                error: 'Erro na remocao do aluno'
            })
        }
    },

    //sem rota
    //Funcao feita para trocar o status do pagamento do aluno para falso (nao pagou a mensalidade no dia)
    async AlunoStatusFalse(alunos, academia) {
        const aluno = alunos;
        const body = {
            mensalidadeStatus: false
        };
        await _.merge(aluno, body)
        academia.save();
    },

    //Funcao para confirmar o pagamento da mensalidade
    async ConfirmaPagamento(request, response){
        const id = request.id;
        const body = request.body;
        const academia = await Academia.findById(id);
        try {

            //Constante usada para armazenar os alunos
            const alunosEncontrados = [];
            const alunosReturn = academia._doc.aluno;
            Object.assign(alunosEncontrados, alunosReturn);

            const idAluno = {
                _id: request.params.idAluno
            };
            const aluno = alunosEncontrados.find(x => x.idAluno === alunosEncontrados.id);

            if (aluno._doc.mensalidadeStatus == false) {
                await _.merge(aluno, body)
            }else {return response.json({message :'Pagamento ja confirmado'})}

            return response.json(aluno);
        } catch (error) {
            console.log(error);
            return response.status(400).send({
                error: 'Erro na busca do aluno'
            })
        }


    }
}