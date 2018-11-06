const express = require('express');

const router = express.Router()

const User = require('../models/user')
const session = require('express-session')

<<<<<<< HEAD
router.get('/', async (req, res) => {
    try {
		const foundUser = await User.findOne({username: req.session.username});
		// console.log(foundUser, 'this is the user');
=======
// route to user profile page
<<<<<<< HEAD
router.get('/', async (req, res) => {
	try {
		console.log(req.session.ID, 'can get ID');
		const foundUser = await User.findById(req.session.ID);
		console.log(foundUser, 'found him');
=======
router.get('/', async (req, res, next) => {
    try {
    	console.log(req.session.username);
		const foundUser = await User.findById(req.session.ID)
		console.log(foundUser, '<--found the user');
>>>>>>> 584e19f8fa66ce9fcd6c3abb5607212e1bbad02c
>>>>>>> a84a9260468b4d790de99a553abdc2463bb0907a
		res.json({
			status: 200,
			data: foundUser
		})
	} catch (err) {
		res.send(err)
	}
})
<<<<<<< HEAD
module.exports = router
=======

module.exports = router

>>>>>>> 584e19f8fa66ce9fcd6c3abb5607212e1bbad02c
