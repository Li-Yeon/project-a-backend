const express = require('express');
const router = express.Router();

const { PlayerNFTs, PlayerSpecificNFT, ResyncNFTMetadata } = require('../controllers/NFTController');

// Pull Player's NFTs
router.get('/userallnfts' + '/:address', PlayerNFTs)

// Pull Player's Specific NFT
router.get('/usernft' + '/:address' + '/:id', PlayerSpecificNFT)

// Resync NFT Metadata
router.get('/resyncnft' + '/:tokenId', ResyncNFTMetadata)

module.exports = router