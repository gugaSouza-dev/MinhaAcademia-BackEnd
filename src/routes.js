const { Router } = require('express');
const AcademiaController = require('./controllers/AcademiaController');

const routes = Router();

routes.post('/academias', AcademiaController.AddAcademia);

routes.get('/academias', AcademiaController.GetAcademia);

module.exports = routes;