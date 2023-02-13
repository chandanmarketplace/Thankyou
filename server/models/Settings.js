const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leftRightSchema = new Schema({
  left: {
    type: Array,
    default: [],
  },
  right: {
    type: Array,
    default: [],
  },
});
const SettingSchema = new Schema({
  shopId: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  setting: {
    left: {
      type: Array,
      default: [],
    },
    right: {
      type: Array,
      default: [],
    },
  },
  html: {
    css: {
      type: String,
      default: ""
    },
    left: {
      type: String,
      default: "",
    },
    right: {
      type: String,
      default: "",
    },
  },
});
module.exports = mongoose.model("Settings", SettingSchema);
