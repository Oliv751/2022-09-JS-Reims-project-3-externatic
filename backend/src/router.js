const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");
const consultantControllers = require("./controllers/consultantControllers");
const candidateControllers = require("./controllers/candidateControllers");
const userControllers = require("./controllers/userControllers");
const documentControllers = require("./controllers/documentControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.put("/offers/:id", offerControllers.edit);
router.post("/offers", offerControllers.add);
router.delete("/offers/:id", offerControllers.destroy);

router.get("/consultants", consultantControllers.browse);
router.get("/consultants/:id", consultantControllers.read);
router.put("/consultants/:id", consultantControllers.edit);
router.post("/consultants", consultantControllers.add);
router.delete("/consultants/:id", consultantControllers.destroy);

router.get("/candidates", candidateControllers.browse);
router.get("/candidates/:id", candidateControllers.read);
router.put("/candidates/:id", candidateControllers.edit);
router.post("/candidates", candidateControllers.add);
router.delete("/candidates/:id", candidateControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/documents", documentControllers.browse);
router.get("/documents/:id", documentControllers.read);
router.put("/documents/:id", documentControllers.edit);
router.post("/documents", documentControllers.add);
router.delete("/documents/:id", documentControllers.destroy);

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

module.exports = router;
