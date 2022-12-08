const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.put("/offers/:id", offerControllers.edit);

module.exports = router;
