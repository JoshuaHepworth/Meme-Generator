const express = require('express');

const router = express.Router()

const User = require('../models/user')
const session = require('express-session')

router.get('/', async (req, res) => {
	try {
		const foundUser = await User.findOne({username: req.session.username});

		res.json({
			status: 200,
			data: foundUser
		})

    } catch(err){

        console.log(err)
    }
})

// post rt to create
module.exports = router

