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
// THIS LOGS USER OUT
router.get('/logout', async (req, res) => {
<<<<<<< HEAD
	const foundUser = await User.findById(req.session.ID)
=======
	console.log(req.session, 'THIS IS THE SESSION NOW');
	// const foundUser = await User.findById(req.session.ID)
>>>>>>> 9e115d529f3bc6086b55169740fc59cc1f3c2c36
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
})




module.exports = router;