const mongoose = require('mongoose')
const User = require('./user')

const memeSchema = new mongoose.Schema({
	upvotes: Number,
	downvotes: Number,
	imgUrl: String,
	user: User.schema,
	channel: String,
	score: (this.upvotes - this.downvotes)/(this.upvotes + this.downvotes)
})

module.exports = mongoose.model('Meme', memeSchema)