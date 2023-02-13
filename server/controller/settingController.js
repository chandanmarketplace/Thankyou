const Setting = require("../models/Settings");
const { SHOPIFY_API_SECRET } = require("../config");

var CryptoJS = require("crypto-js");

const addShopDetails = async (req, res) => {
  // console.log(req.body);
  const newSetting = new Setting(req.body);
  try {
    const setting = await newSetting.save();
    if (!setting) throw Error("Something went wrong with the add setting");
    res.status(200).json({
      data: setting,
      success: true,
      message: `Added default settings for shop ${req?.query?.shopId}`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Unable to add default settings for shop ${req?.query?.shopId}`,
      error,
    });
  }
};

const getSetting = async (req, res) => {
  try {
    const shopSetting = await Setting.findOne({ ...req.query });
    if (!shopSetting) {
      res.status(200).json({
        data: null,
        success: true,
        message: `ShopDetails not found for ${req?.query?.shopId}, ${req?.query?.shopName}`,
      });
    } else {
      res.status(200).json({
        data: shopSetting,
        success: true,
        message: `Fetched shopDetails for ${req?.query?.shopId}, ${req?.query?.shopName}`,
      });
    }
  } catch (err) {
    res.status(400).json({
      data: null,
      success: false,
      message: `Settings not found for shop ${req?.query?.shopId}`,
      error: err,
    });
  }
};

const updateSetting = async (req, res) => {
  try {
    const shopSetting = await Setting.findOneAndUpdate(
      { shopId: req.body.shopId },
      req.body
    );
    if (!shopSetting)
      throw Error("Something went wrong while updating the post");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const urlDectrption = async (req, res) => {

  var originalText = "";

  try {

    const shopNam = req.query.shop.replace(/ /g,"+");
    // const shopNam = req.query.shop;

    // console.log(shopNam);
    // console.log(SHOPIFY_API_SECRET);
    // console

    const bytes = CryptoJS.AES.decrypt(shopNam, SHOPIFY_API_SECRET);

    originalText = bytes.toString(CryptoJS.enc.Utf8);

    // console.log("org",originalText);

    if (!originalText)
      throw Error("Something went wrong while updating the post");

    res.status(200).json({ success: true, shop: originalText });

  } 
  catch (err) {
    res.status(400).json({ msg: err, shop: originalText });
  }
};

// const discountOrder = async (req, res) => {
//   try {
//     const shopSetting = await Setting.findOne({ ...req.query });
//     if (!shopSetting)
//       throw Error("Something went wrong while updating the post");
//     res.status(200).json({ success: true, data:shopSetting });
//   } catch (err) {
//     res.status(400).json({ msg: err });
//   }
// };


module.exports = {
  addShopDetails,
  getSetting,
  updateSetting,
  urlDectrption
};
