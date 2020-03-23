const { Router } = require('express');
const Academia = require('./models/Academia');

const routes = Router();

routes.post('/academias', async (request, response) => {
    const {logo, nome_acad, tel, nome_resp, tel_resp, rua, numero,
    complemento, cep, cidade,estado} = request.body;
    
    const academia = await Academia.create({
        logo,
        nome_acad,
        tel,
        nome_resp,
        tel_resp,
        rua,
        numero,
        complemento,
        cep,
        cidade,
        estado
    })
    
    return response.json(academia)
});

module.exports = routes;