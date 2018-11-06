const express = require('express');
const router = express.Router();
const session = require('express-session');
const User = require('../models/user');


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
		console.log(err)
	}
})



router.post('/', async (req, res) => {
	console.log(req.session, 'this is the session')

	try {
		const user = await User.create(req.body)
		console.log(user, 'here is the user')
		req.session.logged = true;
		// req.session.username = req.body.username;
		console.log(session.body.username)
		console.log(req.session.logged, '<--logged?');
		req.session.username = user.username;
		req.session.ID = user._id;
		console.log(req.session.username, '<--username?');
		console.log(req.session.ID, '<---ID');
		user.save();
		res.json({
			status: 200,
			data: 'login successful'
		});
	} catch(err){
		console.log(err)
	}
});

// <<<<<<< HEAD
// router.get('/logout', (req, res) => {
// 	req.session.destroy((err) => {
// 		if(err) res.send(err);
// 		}
// 	})
// =======

module.exports = router;