const express = require("express");

const router = express.Router();

const terrorWatch = require("../../../utils/tryCatch");

const checkingRequestPermissions = require("../contollers/client.contoller");

router.post("/nuclear/codes", terrorWatch(checkingRequestPermissions));

module.exports = router;
