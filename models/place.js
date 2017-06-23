const Sequelize = require('sequelize');
const db = require('./_db');

var Place = db.define('place', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
		//defaultValue: value,
		//validate: {}
	},
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
	state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.FLOAT,
        allowNull: false
    }	
});

module.exports = Place;