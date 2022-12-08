const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);

module.exports = router;
