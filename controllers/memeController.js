const express = require('express');

const router = express.Router();

const Meme = require('../models/meme');

const User = require('../models/user');

const Image = require('../models/image');

const mgUserName = 'aprudhomme';
const mgPassword = 'Jaglax19';
const apiKey = '53ab19f9-5502-408b-b645-284c4394a5a9';


//INDEX ROUTE
router.get('/', async (req, res, next) => {
  try {

  	const allMemes = await Meme.find({'user._id': req.session.ID});
  	res.json({
  		status: 200,
  		data: allMemes
  	})
  	console.log(allMemes, '<--user memes');
  } catch(e){
      
  }
	    
}) 


router.post('/', async (req, res) => {
	
	try {
		const createdMeme = await Meme.create(req.body);

		const foundUser = await User.findOne(req.session.username);
		await createdMeme.save()
		console.log(createdMeme, '<-- created meme');
		const foundMemes = await Meme.find({})

		res.json({
			status: 200,
			data: createdMeme, foundUser
		})
	} catch (err){
		res.send(err)
	}
})

router.get('/:id', async (req, res, next) => {
  try {
  	const foundMeme = Meme.findbyId(req.body.id);
  	console.log(foundMeme, 'found this meme');
  	res.json({
  		status: 200,
  		data: foundMeme
  	})
  } catch(err){
      res.send(err)
  }
	    
})

router.put('/:id', async (req, res) => {
	try {
		const updatedMeme = await Meme.findByIdAndUpdate(req.params.id, req.body, {new: true});
		res.json({
			status: 200,
			data: updatedMeme
		})
		console.log(updatedMeme, 'the updated meme');
	} catch(err){
		res.send(err)
	}
})

router.delete('/:id', async	(req, res) => {
	try {
		const deletedMeme = await Meme.findByIdAndRemove(req.params.id);
		res.json({
			status: 200,
			data: deletedMeme
		})
	} catch (err){
		res.send(err);
	}
})
module.exports = router;