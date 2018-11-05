const mongoose = require('mongoose');
const Meme = require('./meme')

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	channels: [],
	memes: [Meme.schema]
})
module.exports = mongoose.model('User', userSchema)