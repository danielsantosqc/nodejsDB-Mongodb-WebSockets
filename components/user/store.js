const { Model } = require('mongoose');
const model = require('./model');

///kj
function addUser (user){
	const myUser = new Model(user);
	return myUser.save ();
}

module.exports = {
	add:addUser,
}