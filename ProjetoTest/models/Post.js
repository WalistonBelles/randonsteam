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

const Cliente = db.sequelize.define('cliente', {
	tipo_cli: {
		type: db.Sequelize.STRING
	},
	nome_cli: {
		type: db.Sequelize.STRING
	},
	senha_cli: {
		type: db.Sequelize.STRING
	}
})

//Cria a tabela no banco de dados \/
//Cliente.sync({force: true});

module.exports = Cliente