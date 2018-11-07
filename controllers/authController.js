const express = require('express');
const router = express.Router();
const session = require('express-session');
const User = require('../models/user');


router.get('/', async (req, res) => {
	try {
		const foundUser = await User.findById(req.session.ID);
		res.json({
			status: 200,
			data: foundUser
		})
	} catch (err) {
		console.log(err)
	}
})



router.post('/', async (req, res) => {

	try {
		const user = await User.create(req.body)
		req.session.logged = true;
		// req.session.username = req.body.username;



		// req.session.username = req.body.username;
		// console.log(session.body.username)
		req.session.username = user.username;
		req.session.ID = user._id;
		await user.save();
		await req.session.save();

		res.json({
			status: 200,
			data: user
		});

	} catch(err){
		console.log(err)
	}

});

router.get('/logout', async (req, res) => {
	const foundUser = await User.findById(req.session.ID)
	req.session.destroy((err) => {
		if(err){
			console.log(err)
		} else {
			res.json({
				status: 200
				// data: foundUser

			})
		}
	})
	// req.session.destroy();
	// res.json({status: 200});
})




module.exports = router;