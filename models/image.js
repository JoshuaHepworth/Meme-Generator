const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
	// user: [User.schema],
	imgUrl: [String],
	apiId: {type: String, unique: true}
	//channel:
	//createdDate:
})

module.exports = mongoose.model('Image', imageSchema)