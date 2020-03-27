const { Router } = require('express');
const AcademiaController = require('./controllers/AcademiaController');

const routes = Router();

routes.get('/academias', AcademiaController.GetAcademia);

routes.get('/academias/:id', AcademiaController.GetAcademiaById);

routes.post('/academias', AcademiaController.AddAcademia);

routes.put('/academias/:id', AcademiaController.UpdateAcademia);

routes.delete('/academias/:id', AcademiaController.DeleteAcademia);

module.exports = routes; 