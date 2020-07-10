const Academia = require('../models/Academia');
const { USE_PROXY } = require('http-status');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
    async Registro(req, res){
        const {email, senha, nome_acad} = req.body;
        try {
            if (await Academia.findOne({email}))
                return res.status(400).send({error: 'Usuario ja existe'});
            
            const academia = await Academia.create(req.body);

            academia.senha = undefined;

            return req.send({academia})

        } catch (error) {
            return res.status(400).send({error: 'Erro no registro'});
        }
    },

    async Auth(req, res){
        const {email, senha} = req.body;
        try {
            const academia = await Academia.findOne({email}).select('+senha');

            if(!academia)
            return res.status(400).send({error: 'Usuario nao encontrado'});

            if(!await bcrypt.compare(senha, academia.senha))
            return res.status(400).send({error: 'Senha invalida'});

            academia.senha = undefined;

            const token = jwt.sign({id: academia.id}, authConfig.secret, {
                expiresIn: 28800,
            });

            res.send({academia});
        } catch (error) {
            return res.status(400).send({error: 'Erro na autenticaçao'});
        }
    }
}