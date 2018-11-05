const mongoose = require('mongoose')
const User = require('./user')

const memeSchema = new mongoose.Schema({
	upvotes: Number,
	downvotes: Number,
	topText: String,
	bottomText: String,
	imgUrl: [String],
	// users: [User.schema]
	// imgId:
	//channel:
	//createdDate:
})

module.exports = mongoose.model('Meme', memeSchema)