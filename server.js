"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/api/v1/routes");
const httpStatus = require("http-status");
const PORT = 7001;
const prefix = "/api/v1";

const app = express();
app.use(bodyParser.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const contoller = require("./src/api/v1/contollers/client.contoller");

app.get(prefix + "/nuclear/codes", contoller);

app.get(prefix + "/nuclear/codes/status", (req, res) => res.status(httpStatus.OK).send({ success: true, message: "Codes are active" }));

routes.forEach((route) => app.use(prefix, route));

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err["status"] = httpStatus.NOT_FOUND;
  next(err);
});
app.use((err, req, res, next) => {
  const fullUrl = req.originalUrl;
  console.log("🔥Error on:", fullUrl, `${err}`);
  return res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
    error: true,
    message: err.message,
  });
});

const server = app.listen(PORT, (err) => {
  if (err) return process.exit(1);
  console.log("Server started at ", PORT);
});

module.exports = server;
