const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.put("/offers/:id", offerControllers.edit);
router.post("/offers", offerControllers.add);
router.delete("/offers/:id", offerControllers.destroy);

module.exports = router;
