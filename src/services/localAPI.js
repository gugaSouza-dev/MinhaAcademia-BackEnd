const fetch = require('node-fetch')
const apiURLEstado = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/";



module.exports = {

    async LocaisApiEstado(req, res) {
        try {
            const fetch_response = await fetch(apiURLEstado);
            const estados = await fetch_response.json();

            var siglaEstado = new Array();

            for (let i = 0; i < estados.length; i++) {
                const estadoResp = estados[i].sigla;
                siglaEstado.push(estadoResp);
            }
            return res.send(siglaEstado)
        }
        catch (error) {
            console.log(error)
            return res.status(400).send({
                error: 'Erro na API de localidades do ibge'
            });
        }
    },

    async LocaisApiCidade(req, res) {        
        try {
            const body = req.body;
            const estado = Object.values(body)
            const apiURLCidade = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/microrregioes`;
            const fetch_response = await fetch(apiURLCidade);
            const cidades = await fetch_response.json();
            var cidadeResp = new Array();

            for (let i = 0; i < cidades.length; i++) {
                const nomeCidade = cidades[i].nome;
                cidadeResp.push(nomeCidade);
            }
            return res.send(cidadeResp)
        }
        catch (error) {
            console.log(error)
            return res.status(400).send({
                error: 'Erro na API de localidades do ibge'
            });
        }
    },
}