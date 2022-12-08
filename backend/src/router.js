const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");
const companyControllers = require("./controllers/companyControllers");
const candidateControllers = require("./controllers/candidateControllers");
const userControllers = require("./controllers/userControllers");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.put("/offers/:id", offerControllers.edit);
router.post("/offers", offerControllers.add);
router.delete("/offers/:id", offerControllers.destroy);

router.get("/companies", companyControllers.browse);
router.get("/companies/:id", companyControllers.read);
router.put("/companies/:id", companyControllers.edit);
router.post("/companies", companyControllers.add);
router.delete("/companies/:id", companyControllers.destroy);

router.get("/candidates", candidateControllers.browse);
router.get("/candidates/:id", candidateControllers.read);
router.put("/candidates/:id", candidateControllers.edit);
router.post("/candidates", candidateControllers.add);
router.delete("/candidates/:id", candidateControllers.destroy);

router.get("/users", userControllers.browse);

module.exports = router;
