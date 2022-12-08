const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");
const companyControllers = require("./controllers/companyControllers");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.put("/offers/:id", offerControllers.edit);
router.post("/offers", offerControllers.add);
router.delete("/offers/:id", offerControllers.destroy);

router.get("/companies", companyControllers.browse);
router.get("/companies/:id", companyControllers.read);

module.exports = router;
