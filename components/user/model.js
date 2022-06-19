const mongoose = require('mongoose');

const Schemaa = mongoose.Schema;

const mySchema = new Schemaa({
	name: String,
	date: Date,
});

const model = mongoose.model('usuarios', mySchema);

module.exports = model;