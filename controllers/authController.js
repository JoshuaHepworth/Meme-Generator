const express = require('express');
const router = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt')
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


// LOGIN ROUTE
router.post('/', async (req, res) => {
	console.log(req.session, 'this is the session')

	try {
		const user = await User.findOne({username: req.body.username})
		console.log(user, 'here is the user')
		req.session.logged = true;
		// req.session.username = req.body.username;
		if(user){
		   if(bcrypt.compareSync(req.body.password, user.password)){
          req.session.logged = true;
          req.session.username = req.body.username;
          req.session.password = req.body.password;
        } else {
              req.session.message = 'Username or Password is Wrong';
      
        }

}


		// req.session.username = req.body.username;
		// console.log(session.body.username)
		console.log(req.session.logged, '<--logged?');
		req.session.username = user.username;
		req.session.ID = user._id;
		await user.save();
		await req.session.save();
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

router.post('/register', async (req, res) => {
  try {
  	const password = req.body.password
  	const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const foundUser = await User.findOne({
    	username: req.body.username
    })
    const userEntry = {};
    userEntry.username = req.body.username;
    userEntry.password = passwordHash

    const user = await User.create(userEntry)

    req.session.username = req.body.username;
    req.session.logged = true;
    req.session.message = ''
    res.json({
    	status: 200,
    	data: foundUser
    })
    console.log('register')
    console.log(req.session.logged, '<--logged?');
    console.log(req.session, '<--session');
    } catch(err){
        console.log(err)
    }
		    	




})
// THIS LOGS USER OUT
router.get('/logout', async (req, res) => {
	console.log(req.session, 'THIS IS THE SESSION NOW');
	// const foundUser = await User.findById(req.session.ID)
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