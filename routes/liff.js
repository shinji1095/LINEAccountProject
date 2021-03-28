var express = require('express');
var router = express.Router();
const LIFFController = require("../controller/LIFFController");

router.get("/omikuji", LIFFController.omikuji);

module.exports = router;