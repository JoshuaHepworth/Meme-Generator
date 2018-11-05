const express = require('express');
const router = express.Router();
const session = require('express-session')
const User = require('../models/user')

router.post('/', async (req, res) => {
	console.log(req.body, 'this is the session')

	try {
		const user = await User.create(req.body)
		req.session.logged = true;
		req.session.username = req.body.username;
		console.log(session)
		res.json({
			status: 200,
			data: 'login successful'
		});
	} catch(err){
		console.log(err)
	}
});

module.exports = router;