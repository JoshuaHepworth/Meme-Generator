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
  	const images = await fetch('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=25&days=14&apiKey=' + apiKey);
	
	const parsedImages = await images.json();

	const mappedImages = parsedImages.map((image) => {
		return {
			imgUrl: image.result.imageUrl
		}
	})

	const createdImages = await Image.create(mappedImages)
  	const allMemes = await Meme.find();
  	res.json({
  		status: 200,
  		data: allMemes
  	})
  } catch(e){
      res.send(err)
  }
	    
}) 


router.post('/', async (req, res) => {
	
	try {
		const createdMeme = await Meme.create(req.body);

		res.json({
			status: 200,
			data: createdMeme
		})
	} catch (err){
		res.send(err)
	}
})

router.get('/:id', async (req, res, next) => {
  try {
  	const foundMeme = await Meme.findbyId(req.params.id);
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