const express = require('express')
require('dotenv').config();
const cors = require('cors');

// Define Mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

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

// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Mongoose is initialized');
        // Listen for Requests
        app.listen(process.env.PORT, () => {
            console.log('Listening at PORT: ' + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error);
    })

// Route to call for BOTR NFT API
app.use('/nft', NFTRoutes)