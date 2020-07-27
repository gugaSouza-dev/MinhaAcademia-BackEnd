const Academia = require('../models/Academia');
const {
    TrocaAlunoStatus
} = require('./AlunoController');
const _ = require('lodash');


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
            if (!listaAlunos.length == 0) {
                return response.status(200).send({
                    message: 'Estes alunos estao com a mensalidade atrasada',
                    listaAlunos
                })
            } else {
                return response.status(200).send({
                    message: 'Todos os alunos com mensalidade em dia'
                })
            }
        } catch (error) {
            return response.status(400).send({
                error: 'Erro no lembrete de mensalidade'
            })
        }
    },
    async StatusMensalidade(request, response) {
        const id = request.id;
        const academia = await Academia.findById(id);
        var data = new Date;
        var dia = data.getUTCDate();
        let atrasados = 0;

        try {
            const alunos = academia._doc.aluno;
            if (alunos == []) return response.send({
                message: 'Nenhum aluno cadastrado'
            });

            var avisoVencimento = new Array();
            var avisoSeteDias = new Array();
            for (let i = 0; i < alunos.length; i++) {
                const mensalidadeStatus = alunos[i]._doc.mensalidadeStatus;
                const mensalidadeVenc = alunos[i]._doc.mensalidadeVenc.getUTCDate();

                if (mensalidadeVenc - 1 > dia - 6) {
                    if (mensalidadeVenc == dia) {
                        avisoVencimento.push(alunos[i]);
                    }

                    avisoSeteDias.push(alunos[i]);
                }

                if (mensalidadeVenc > dia) {
                    if (mensalidadeStatus == true)
                        TrocaAlunoStatus(alunos[i], academia)

                }
                if (alunos[i]._doc.mensalidadeStatus == false)
                    atrasados++;
            }

            return response.send({
                avisoVencimento,
                avisoSeteDias,
                atrasados
            })

        } catch (error) {
            console.log(error)
            return response.status(400).send({
                error: 'Erro no lembrete de mensalidade'
            })
        }
    },
}