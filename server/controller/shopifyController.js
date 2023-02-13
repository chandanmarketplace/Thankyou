const { SHOPIFY_APP_URL } = require("../config");
const axios = require('axios');

const getProducts = async (req, res) => {
    try {
        const shopId = req.query.shopId;
        const products = await axios.get(SHOPIFY_APP_URL+`/api/getProducts?shopId=${shopId}`);
        // if (!products)
        //     throw Error("Something went wrong while updating the post");
        res.status(200).json({ success: true, data:products.data });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
};

const getCollections = async (req, res) => {
    try {
        const shopId = req.query.shopId;
        const collections = await axios.get(SHOPIFY_APP_URL+`/api/getCollections?shopId=${shopId}`);
        // if (!collections)
        //     throw Error("Something went wrong while updating the post");
        res.status(200).json({ success: true, data:collections.data });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
};

const discountOrder = async (req, res) => {
    console.log(req.body.shopId)
    try {
        const shopId = req.body.shopId;
        // const draftorder = await axios.get(SHOPIFY_APP_URL+`/api/draftorder?shopId=${shopId}`);
        const draftorder2 = await axios.post(SHOPIFY_APP_URL+`/api/draftorder?shopId=${shopId}`, { data: req.body });

        console.log(draftorder2)
        console.log(draftorder2.data)
        // if (!collections)
        //     throw Error("Something went wrong while updating the post");
        res.status(200).json({ success: true, data:draftorder2.data });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
};

module.exports = {
    getProducts,
    getCollections,
    discountOrder
};