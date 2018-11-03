const mongoose = require('mongoose')

const memeSchema = new mongoose.Schema({
	upvotes: Number,
	downvotes: Number,
	topText: String,
	bottomText: String,
	user: [User.schema],
	imgUrl: String,
	// imgId:
	//channel:
	//createdDate:
})

module.exports = mongoose.model('Meme', memeSchema)