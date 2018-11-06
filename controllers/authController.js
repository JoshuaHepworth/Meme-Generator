const express = require('express');
const router = express.Router();
const session = require('express-session');
const User = require('../models/user');



router.post('/', async (req, res) => {
	console.log(req.session, 'this is the session')

	try {
		const user = await User.create(req.body)
		console.log(user, 'here is the user')
		req.session.logged = true;

		// req.session.username = req.body.username;
		// console.log(session.body.username)

		console.log(req.session.logged, '<--logged?');
		req.session.username = user.username;
		req.session.ID = user._id;
		console.log(req.session.username, '<--username?');
		console.log(req.session.ID, '<---ID');
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
})




module.exports = router;