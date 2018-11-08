const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('./models/user')
const Meme = require('./models/meme')
const Image = require('./models/image')
const session = require('express-session')
require('dotenv').config();


require('./db/db')
app.use(session({
	secret: 'memes dopeness',
	resave: false,
	saveUninitialized: false
}))

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//CONTROLLERS
const userController  = require('./controllers/userController')
const memeController  = require('./controllers/memeController')
const imageController = require('./controllers/imageController')
const authController  = require('./controllers/authController')

app.use('/api/v1/images', imageController);
app.use('/auth', authController);
app.use('/api/v1/memes', memeController);
app.use('/api/v1/user', userController);

app.listen(process.env.PORT || 5000, () => {
	console.log('listening on port 5000')
})
