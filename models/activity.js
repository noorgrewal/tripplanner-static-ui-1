const Sequelize = require('sequelize');
const db = require('./_db');

var Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
		//defaultValue: value,
		//validate: {}
	},
    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Activity;