const express = require('express')
require('dotenv').config();
const cors = require('cors');

// Define Express App
const app = express()

// Use JSON
app.use(express.json())

// Enable cors
app.use(cors());

// Middleware to see what API is requested
app.use((req, res, next) => {
    console.log(req.path, req.method + " is called")
    next()
})

// Routes
const NFTRoutes = require('./routes/NFT')

// Route to call for BOTR NFT API
app.use('/nft', NFTRoutes)

// Listen for Requests
app.listen(process.env.PORT, () => {
    console.log('Listening at PORT: ' + process.env.PORT)
})