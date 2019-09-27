const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Config
	// Template Engine
		app.engine('handlebars', handlebars({defaultLayout: 'main'}))
		app.set('view engine', 'handlebars')
	// Body Parser
		app.use(bodyParser.urlencoded({extended: false}))
		app.use(bodyParser.json())

//Rotas
	
	app.get('/', function(req,res){
		Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
			res.render('home', {posts: posts})
		})
	})

	app.get('/cadastro', function(req, res){
		res.render('cadastro')
	})

	app.get('/login', function(req, res){
		res.render('login')
	})

	app.post('/add', function(req, res){
		Post.create({
			nome_cli: req.body.nome,
			email_cli: req.body.email,
			senha_cli: req.body.senha
		}).then(function(){
			res.redirect('/')
		}).catch(function(erro){
			res.send("Houve um erro: " + erro)
		})
	})

	app.post('/login', function(req, res){
		execSQLQuery('SELECT * FROM usuarios', res);
	})

	app.get('/deletar/:id', function(req, res){
		Post.destroy({where: {'id': req.params.id}}).then(function(){
			res.send("Postagem deletada com sucesso!")
		}).catch(function(erro){
			res.send("Esta postagem não existe")
		})
	})

//Funções
	function execSQLQuery(sqlQry, res){
	  const connection = mysql.createConnection({
	    host     : 'localhost',
	    user     : 'root',
	    password : 'w2a0l0i0',
	    database : 'sistemadecadastro'
	  });
	 
	  connection.query(sqlQry, function(error, results, fields){
	      if(error) 
	        res.json(error);
	      else
	        res.json(results);
	      connection.end();
	      console.log('executou!');
	  });
	}

app.listen(3000, function(){
	console.log("Servidor Online!! Rodando na url http://localhost:3000");
})