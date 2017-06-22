const Sequelize = require('sequelize');
const db = require('./_db');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
		//defaultValue: value,
		//validate: {}
	},
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
	price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Restaurant;