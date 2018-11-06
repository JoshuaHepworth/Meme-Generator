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
		// console.log(session.body.username)


		// req.session.username = req.body.username;
		// console.log(session.body.username)
		console.log(req.session.logged, '<--logged?');
		req.session.username = user.username;
		req.session.ID = user._id;
		await user.save();
		await req.session.save();

		console.log(req.session.username, '<--username?');
		console.log(req.session.ID, '<---ID');
		// user.save();
		await user.save();

		console.log(user, 'stupid fucking user');
		console.log(req.session, 'goddamn session');

		res.json({
			status: 200,
			data: user
		});

	} catch(err){
		console.log(err)
	}

});

router.get('/logout', async (req, res) => {
	console.log(req.session.logged);
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