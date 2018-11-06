const express = require('express');

const router = express.Router()

const User = require('../models/user')
const session = require('express-session')

// route to user profile page
router.get('/', async (req, res) => {
	try {
		console.log(req.session.ID, 'can get ID');
		const foundUser = await User.findById(req.session.ID);
		console.log(foundUser, 'found him');
		res.json({
			status: 200,
			data: foundUser
		})
	} catch (err) {
		res.send(err)
	}
})

module.exports = router

