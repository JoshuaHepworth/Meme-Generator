const express = require('express');

const router = express.Router()

const User = require('../models/user')
const session = require('express-session')

// router.get('/', async (req, res) => {
    
		
		// console.log(foundUser, 'this is the user');
// route to user profile page
router.get('/', async (req, res) => {
    try {
    console.log(req.session.username);
		const foundUser = await User.findById(req.session.ID)
		console.log(foundUser, '<--found the user');
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
