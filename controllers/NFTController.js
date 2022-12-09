// ----------------- API Requests ----------------- //
// GET Player's NFT By Address
const PlayerNFTs = async (req, res) => {

    // Player's Wallet Address 
    const { address } = req.params;

    try {
        // Pull All Player's NFT
        const pullNFTs = await Moralis.EvmApi.nft.getWalletNFTs({
            address,
            chain,
            tokenAddresses: [nftAddress]
        });

        const filteredNFT = pullNFTs.data.result

        // Send NFTs Data
        res.send({
            status: 200,
            data: filteredNFT
        })
    }
    catch (error) {
        // Catch error message
        res.send({
            status: 404,
            message: error
        })
    }
}

// GET Player's Specific NFT By Address
const PlayerSpecificNFT = async (req, res) => {

    // Player's Wallet Address and NFT Token ID
    const { address, id } = req.params;

    try {
        // Pull All Player's NFT
        const pullNFTs = await Moralis.EvmApi.nft.getWalletNFTs({
            address,
            chain,
            tokenAddresses: [nftAddress]
        });

        // Filter out NFT based on Token ID
        const specificNFT = pullNFTs.data.result.filter(x => x.token_id == id);

        // Send NFT Data
        res.send({
            status: 200,
            data: specificNFT
        })
    }
    catch (error) {
        // Catch error message
        res.send({
            status: 404,
            message: error
        })
    }
}

const ResyncNFTMetadata = async (req, res) => {

    // Player's Wallet Address 
    const { tokenId } = req.params;

    try {
        // Pull All Player's NFT
        const response = await Moralis.EvmApi.nft.reSyncMetadata({
            address: nftAddress,
            chain,
            tokenId
        });

        // Send NFTs Data
        res.send({
            status: 200,
            data: response?.toJSON()
        })
    }
    catch (error) {
        // Catch error message
        res.send({
            status: 404,
            message: error
        })
    }
}

module.exports = {
    PlayerNFTs,
    PlayerSpecificNFT,
    ResyncNFTMetadata
}