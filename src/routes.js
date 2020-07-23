const { Router } = require('express');
const AcademiaController = require('./controllers/AcademiaController');
const AlunoController = require('./controllers/AlunoController');
const AuthController = require('./controllers/AuthController');
const AdmController = require('./controllers/AdmController');
const LembreteController = require('./controllers/LembreteController');
const authMiddleware = require('./middlewares/auth');


const routes = Router();

//Login
routes.post('/registro', AuthController.Registro);

routes.post('/login', AuthController.Login);


routes.use(authMiddleware);


//Funçoes da academia
routes.post('/academias', AcademiaController.AddAcademia);

routes.get('/academias', AcademiaController.DadosAcademia);

routes.put('/academias', AcademiaController.UpdateAcademia);

routes.delete('/academias', AcademiaController.DeleteAcademia);


//Funçoes dos alunos
routes.post('/alunos', AlunoController.AddAluno);

routes.get('/alunos', AlunoController.GetAluno);

routes.get('/alunos/:idAluno', AlunoController.GetAlunoById);

routes.delete('/alunos/:idAluno', AlunoController.DeleteAluno);

routes.put('/alunos/:idAluno', AlunoController.AlteraAluno);


//Lembretes
routes.get('/lembrete', LembreteController.LembreteMensalidade);


//Funçoes do adm
routes.get('/academias/adm', AdmController.ListaAcademia);

routes.get('/academias/adm/:id', AdmController.GetAcademiaById);

routes.delete('/academias/adm/:id', AdmController.DeletaQualquerAcademia);

module.exports = routes; 