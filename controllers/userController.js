const express = require('express');

const router = express.Router()

const User = require('../models/user')
const session = require('express-session')

<<<<<<< HEAD
// router.get('/', async (req, res) => {
    
		
		// console.log(foundUser, 'this is the user');
// route to user profile page
router.get('/', async (req, res) => {
    try {
    console.log(req.session.username);
		const foundUser = await User.findById(req.session.ID)
		console.log(foundUser, '<--found the user');
=======
// route to user profile page
router.get('/', async (req, res) => {
	try {
		console.log(req.session.username, 'can get username');
		const foundUser = await User.findOne({username: 'test test'});
		console.log(foundUser, 'found him');
>>>>>>> 8293b53caa97a926c7d0a3a1d54fa1c5b620dd84
		res.json({
			status: 200,
			data: foundUser
		})
<<<<<<< HEAD

    } catch(err){

        console.log(err)
    }
=======
	} catch (err) {
		res.send(err)
	}
>>>>>>> 8293b53caa97a926c7d0a3a1d54fa1c5b620dd84
})

// post rt to create
module.exports = router
<<<<<<< HEAD
=======

>>>>>>> 8293b53caa97a926c7d0a3a1d54fa1c5b620dd84
