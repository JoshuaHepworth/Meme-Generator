const express = require('express');

const router = express.Router()

const User = require('../models/user')

router.get('/', async (req, res, next) => {
    try {
		const foundUser = await User.findOne({username: req.session.username});
		console.log(foundUser);
		res.json({
			status: 200,
			data: {
				username: foundUser
			}
		})

    } catch(e){

        console.log(e)
    }
	    
})

module.exports = router