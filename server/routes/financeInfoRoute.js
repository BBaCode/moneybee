const express = require("express");
const router = express.Router();
const financeInfoController = require("../controllers/financeInfoController.js");

router.get("/", financeInfoController.getAll);
router.get("/:id", financeInfoController.getOne);

module.exports = router;
