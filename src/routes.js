const { Router } = require('express');
const AcademiaController = require('./controllers/AcademiaController');
const AlunoController = require('./controllers/AlunoController');
const AuthController = require('./controllers/AuthController');
const AdmController = require('./controllers/AdmController');
const authMiddleware = require('./middlewares/auth');


const routes = Router();

routes.post('/registro', AuthController.Registro);

routes.post('/login', AuthController.Login);



routes.use(authMiddleware);



routes.get('/academias/:id', AcademiaController.GetAcademiaById);

routes.post('/academias', AcademiaController.AddAcademia);

routes.put('/academias/:id', AcademiaController.UpdateAcademia);

routes.delete('/academias/:id', AcademiaController.DeleteAcademia);



routes.post('/alunos/:id', AlunoController.AddAluno);

routes.get('/alunos/:id', AlunoController.GetAluno);

routes.get('/alunos/:idAcademia/:idAluno', AlunoController.GetAlunoById);


//Funçoes do adm
routes.get('/academia/adm', AdmController.ListaAcademia);

module.exports = routes; 