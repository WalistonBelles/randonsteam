const db = require('./db')

const Post = db.sequelize.define('usuario', {
	nome_cli: {
		type: db.Sequelize.STRING
	},
	email_cli: {
		type: db.Sequelize.STRING
	},
	senha_cli: {
		type: db.Sequelize.STRING
	}
})

//Cria a tabela no banco de dados \/
//Post.sync({force: true});

module.exports = Post