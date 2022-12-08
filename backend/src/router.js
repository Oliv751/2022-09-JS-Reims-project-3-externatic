const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");

router.get("/offers", offerControllers.browse);

module.exports = router;
