const express = require('express');

const router =  express.Router();

const Meme = require('../models/meme');

const User = require('../models/user');

const Image = require('../models/image');

const mgUserName = 'aprudhomme';
const mgPassword = 'Jaglax19';
const apiKey = '53ab19f9-5502-408b-b645-284c4394a5a9';


router.get('/', async (req, res) => {
	try {
		const images = await fetch('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=25&days=14&apiKey=' + apiKey);
		const imagesJSON = await images.json();
		JSON.stringify(imagesJSON)

		res.send(imagesJSON);


		// const parsedImages = await images.json();
		// JSON.stringify(parsedImages);
		// res.send(parsedImages);

		// const mappedImages = await parsedImages.map((image) => {
		// 	// console.log(image);
		// 	const newObj = {
		// 		imgUrl: image.result.imageUrl
		// 	}
		// 	return newObj
		// })
		
		
	} catch (err) {
		res.send(err)
	}
})

module.exports = router;