const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cors = require('cors');
const app = express();
app.set("port", 4000);
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json())
app.use(cookieParser());
app.use(cors());

const { MONGO_URI } = require("./config");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connnection... successful");
  })
  .catch((err) => console.log(err, "no connection"));

const session_routes = require("./routes/session");
const setting_routes = require("./routes/settings");

app.use("/api/session/", session_routes);
app.use("/api/setting/", setting_routes);

app.listen(app.get("port"), () => {
  console.log("Express server listening on port 4000");
});
