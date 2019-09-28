const db = require('./db')

const Turma = db.sequelize.define('turmas', {
	local_tur: {
		type: db.Sequelize.STRING
	},
	horario_tur: {
		type: db.Sequelize.STRING
	},
	zona_tur: {
		type: db.Sequelize.STRING
	},
	instrutor_tur: {
		type: db.Sequelize.STRING
	}
})

//Turma.sync({force: true});

module.exports = Turma