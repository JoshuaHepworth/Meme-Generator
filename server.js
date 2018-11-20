const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('./models/user')
const Meme = require('./models/meme')
const Image = require('./models/image')
const session = require('express-session')

const originRoute = 'https://react-dank-meme.herokuapp.com' || 'http://localhost:3000'

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
	origin: originRoute,
	credentials: true,
	optionsSuccessStatus: 200,
	Access-Cotnrol-Allow-Origin
}
app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", originRoute);
  next();
});

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
