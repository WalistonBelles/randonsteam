const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root', 'w2a0l0i0', {
	host: "localhost",
	dialect: 'mysql'
})

sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso ao banco de dados!")
}).catch(function(erro){
	console.log("Falha ao se conectar ao banco de dados: "+erro)
})

const Postagem = sequelize.define('postagens', {
	titulo: {
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}
})

const Usuario = sequelize.define('usuarios', {
	nome: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	senha: {
		type: Sequelize.STRING
	}
})


//Postagem.sync({force: true}) << Cria a tabela postagem no banco de dados.


/* Inserir uma nova postagem ao banco de dados.
Postagem.create({
	titulo: "Testando",
	conteudo: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
})
*/

/* Inserir um novo usuario ao banco de dados.
Usuario.create({
	nome: "Waliston",
	email: "waliston@gmail.com",
	senha: "waliston123"
})
*/

//Usuario.sync({force: true})

