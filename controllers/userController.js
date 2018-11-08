const express = require('express');

const router = express.Router()

const User = require('../models/user')
const session = require('express-session')




router.get('/', async (req, res) => {
	try {
		const foundUser = await User.findById(req.session.ID);


		res.json({
			status: 200,
			data: foundUser
		})

    } catch(err){

        console.log(err)
    }
})
router.get('/all', async (req, res) => {
	try {
		const allUsers = await User.find({});

		res.json({
			status: 200,
			data: allUsers
		})
	} catch (err) {
		res.send(err)
	}
})
router.get('/:id', async (req, res) => {
	try {
		console.log('hitting the route', req.params.id);
		const foundUser = await User.findById(req.params.id);

		res.json({
			status: 200,
			data: foundUser
		})
	} catch (err) {
		res.send(err)
	}
})



// post rt to create
module.exports = router

