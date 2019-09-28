const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Cliente = require('./models/Post')
const Turma = require('./models/Turma')

// Config
	// Template Engine
		app.engine('handlebars', handlebars({defaultLayout: 'main'}))
		app.set('view engine', 'handlebars')
	// Body Parser
		app.use(bodyParser.urlencoded({extended: false}))
		app.use(bodyParser.json())

//Rotas
	
	app.get('/', function(req,res){
		Cliente.findAll({order: [['id', 'DESC']]}).then(function(clientes){
			res.render('home', {clientes: clientes})
		})
	})

	app.get('/cadastro', function(req, res){
		res.render('cadastro')
	})

	app.get('/login', function(req, res){
		res.render('login')
	})

	//Validar login
	app.post('/login', function(req, res){
		Cliente.findOne({ where: {nome_cli: req.body.nome, senha_cli: req.body.senha}}).then(function(clientes){
			if(clientes != null){
				Cliente.findOne({where:{tipo_cli: "Profissional", nome_cli: req.body.nome}}).then(function(clientes){
					if ( clientes != null){
					console.log(clientes)
					res.render('homeProfissional', {nome_cli: req.body.nome, senha_cli: req.body.senha})
				}
				else
					res.render('home', {tipo_cli: "Profissional", nome_cli: req.body.nome, senha_cli: req.body.senha})
				})
			}
			else
				res.send("Usuário Inválido!")
		})
	})

	app.get('/turmas', function(req,res){
		
		Turma.findAll().then(function(turmas){
			res.render('turmas', {turmas: turmas})
		})
		
	})

	app.get('/cadastroTurmas', function(req,res){
		res.render('cadastroTurmas')
	})

	app.post('/add', function(req, res){
		Cliente.create({
			tipo_cli: req.body.tipo,
			nome_cli: req.body.nome,
			senha_cli: req.body.senha
		}).then(function(){
			res.redirect('/')
		}).catch(function(erro){
			res.send("Houve um erro: " + erro)
		})
	})

	app.post('/addTurmas', function(req,res){
		Turma.create({
			local_tur: req.body.local,
			horario_tur: req.body.horario,
			zona_tur: req.body.zona,
			instrutor_tur: req.body.instrutor
		}).then(function(){
			res.redirect('/turmas')
		}).catch(function(erro){
			res.send("Houve um erro: " + erro)
		})
	})

	app.get('/deletar/:id', function(req, res){
		Post.destroy({where: {'id': req.params.id}}).then(function(){
			res.send("Postagem deletada com sucesso!")
		}).catch(function(erro){
			res.send("Esta postagem não existe")
		})
	})

//Funções

app.listen(3000, function(){
	console.log("Servidor Online!! Rodando na url http://localhost:3000");
})