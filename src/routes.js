const { Router } = require('express');
const AcademiaController = require('./controllers/AcademiaController');
const AlunoController = require('./controllers/AlunoController');

const routes = Router();

routes.get('/academias', AcademiaController.GetAcademia);

routes.get('/academias/:id', AcademiaController.GetAcademiaById);

routes.post('/academias', AcademiaController.AddAcademia);

routes.put('/academias/:id', AcademiaController.UpdateAcademia);

routes.delete('/academias/:id', AcademiaController.DeleteAcademia);



routes.post('/alunos/:id', AlunoController.AddAluno);

routes.get('/alunos/:id', AlunoController.GetAluno);

routes.get('/alunos/:idAcademia/:idAluno', AlunoController.GetAlunoById);


module.exports = routes; 