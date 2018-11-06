const express = require('express');

const router = express.Router()

const User = require('../models/user')
const session = require('express-session')

// route to user profile page
router.get('/', async (req, res, next) => {
    try {
    	console.log(req.session.username);
		const foundUser = await User.findById(req.session.ID)
		console.log(foundUser, '<--found the user');
		res.json({
			status: 200,
			data: foundUser
		})

    } catch(e){

        console.log(e)
    }
})

module.exports = router

