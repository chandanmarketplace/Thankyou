const express = require("express");
const {
  getSetting,
  updateSetting,
  addShopDetails,
  urlDectrption,
} = require("../controller/settingController");

const {
  getCollections,
  getProducts,
  discountOrder,
} = require("../controller/shopifyController");

const router = express.Router();

router.post("/add", addShopDetails);
router.get("/get", getSetting);
router.post("/update", updateSetting);
router.get("/url", urlDectrption);



// shopify app
router.get("/getProducts", getProducts);
router.get("/getCollections", getCollections);
router.post("/discountorder", discountOrder);

module.exports = router;
