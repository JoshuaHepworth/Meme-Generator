const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
	// user: [User.schema],
	imgUrl: [String],
	// imgId:
	//channel:
	//createdDate:
})

module.exports = mongoose.model('Image', imageSchema)