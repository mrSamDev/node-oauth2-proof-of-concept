const express = require("express");

const router = express.Router();

const terrorWatch = require("../../../utils/tryCatch");

const checkingVaultPermissins = require("../middleware/vault");

const codeVault = require("../contollers/resource.contoller");

router.get("/get/launch-codes", checkingVaultPermissins, terrorWatch(codeVault));

module.exports = router;
