'use strict'
const express = require('express');
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
    async UpdateAcademia(request, response) {
        // const id = request.id;
        // console.log(id)
        // try {

        //     // const academia = await Academia.findById(id);

        //     // const keys = Object.keys(request.body);

        //     // keys.forEach(key => {
        //     //     academia[key] = request.body[key];
        //     // });

        //     // const upAcademia = Academia.updateOne(request.body);

        //     const academia = await Academia.findById(id)

        //     const index = Academia.find(academia);

        //     const keys = Object.keys(request.body);

        //     keys.forEach(key => {
        //         academia[key] = request.body[key];
        //     });

        //     const upAcademia = Academia.updateOne(academia[keys]);

        //     //Arrumar o retorno
        //     return response.send({
        //         upAcademia
        //     });
        // } catch (error) {
        //     console.log(error)
        //     return response.status(400).send({
        //         error: 'Erro na atualizaçao da academia'
        //     })
        // }

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