const express = require('express');

const router =  express.Router();

const Meme = require('../models/meme');

const User = require('../models/user');

const Image = require('../models/image');

const request = require('superagent');

const mgUserName = 'aprudhomme';
const mgPassword = 'Jaglax19';
const apiKey = '53ab19f9-5502-408b-b645-284c4394a5a9';


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

router.get('/:')

module.exports = router;