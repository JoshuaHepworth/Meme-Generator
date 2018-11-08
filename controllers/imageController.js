const express = require('express');

const router =  express.Router();

const Meme = require('../models/meme');

const User = require('../models/user');

const Image = require('../models/image');

const request = require('superagent');


const apiKey = process.env.API_KEY;


router.get('/', async (req, res) => {
	try {
		const images = await request.get('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=25&days=7&apiKey=53ab19f9-5502-408b-b645-284c4394a5a9');
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
		console.log('ROUTE HITTING');
		const query = req.params.channel
		const images = await request.get('http://version1.api.memegenerator.net//Generators_Search?q=' + query + '&pageIndex=0&pageSize=25&apiKey=' + apiKey)
		const imagesJSON = JSON.parse(images.text);
		console.log(imagesJSON, 'heres the parsed response');
		JSON.stringify(imagesJSON);
		res.json({
			status: 200,
			data: imagesJSON.result
		})
	} catch (err) {
		res.send(err)
	}
	
// fetch end point + 'params channel'
// fetch localhost /memes/ <---  plug in user search
// in express, user search would be the search params
})

module.exports = router;