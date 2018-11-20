const express = require('express');

const router =  express.Router();

const Meme = require('../models/meme');

const User = require('../models/user');

const Image = require('../models/image');

const request = require('superagent');

const apiKey = process.env.API_KEY;


router.get('/', async (req, res) => {
	try {
		const images = await request.get('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=25&days=7&apiKey=' + apiKey);
		// console.log('hey');
		const imageJSON = JSON.parse(images.text);
		// res.send(imageJSON.result)
		JSON.stringify(imageJSON);
		res.json({
			status: 200,
			data: imageJSON.result
		})
	} catch (err) {
		res.send(err)
	}
	

})

router.get('/:channel', async (req, res) => {
	try {

		const query = req.params.channel
		const images = await request.get('http://version1.api.memegenerator.net//Generators_Search?q=' + query + '&pageIndex=0&pageSize=25&apiKey=' + apiKey)
		const imagesJSON = JSON.parse(images.text);
	
		JSON.stringify(imagesJSON);
		res.json({
			status: 200,
			data: imagesJSON.result
		})
	} catch (err) {
		res.send(err)
	}
	

})

module.exports = router;