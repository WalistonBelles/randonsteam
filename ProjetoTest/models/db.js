const Sequelize = require('sequelize');

// Conexão com o banco de daddos MySql
	const sequelize = new Sequelize('sistemadecadastro', 'root', 'w2a0l0i0', {
		host: "localhost",			
		dialect: 'mysql'
	})

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}