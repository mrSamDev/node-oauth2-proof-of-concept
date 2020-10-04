const express = require("express");

const router = express.Router();

const terrorWatch = require("../../../utils/tryCatch");

const checkingYourCiaPermissions = require("../middleware/cia");

const codeRequestPermissins = require("../contollers/authenticate.contoller");

router.post("/ask/cia", checkingYourCiaPermissions, terrorWatch(codeRequestPermissins));

module.exports = router;
