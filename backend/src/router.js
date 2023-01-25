const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");
const consultantControllers = require("./controllers/consultantControllers");
const candidateControllers = require("./controllers/candidateControllers");
const userControllers = require("./controllers/userControllers");
const documentControllers = require("./controllers/documentControllers");
const categoryControllers = require("./controllers/categoryControllers");
const experienceControllers = require("./controllers/experienceControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const { sendEmail } = require("./services/email");
// Public routes

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);

router.post(
  "/consultants",
  hashPassword,
  userControllers.add,
  consultantControllers.add
);
router.post(
  "/candidates",
  hashPassword,
  userControllers.add,
  candidateControllers.add
);

router.post("/users", userControllers.add);

router.get("/documents", documentControllers.browse);
router.get("/documents/:id", documentControllers.read);
router.put("/documents/:id", documentControllers.edit);
router.post("/documents", documentControllers.add);
router.delete("/documents/:id", documentControllers.destroy);

// /!\ login should be a public route

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// then the routes to protect

router.use(verifyToken); // authentication wall : verifyToken is activated for each route after this line

router.put("/offers/:id", offerControllers.edit);
router.post("/offers", offerControllers.add);
router.delete("/offers/:id", offerControllers.destroy);
router.post("/offers/candidacy", sendEmail);

router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.get("/consultants", consultantControllers.browse);
router.get("/consultants/:id", consultantControllers.read);
router.put("/consultants/:id", consultantControllers.edit);
router.delete("/consultants/:id", consultantControllers.destroy);

router.get("/candidates", candidateControllers.browse);
router.get("/candidates/:userId", candidateControllers.read);
router.put("/candidates/:id", candidateControllers.edit);
router.delete("/candidates/:id", candidateControllers.destroy);

router.get("/experiences", experienceControllers.browse);
router.get("/experiences/:id", experienceControllers.read);
router.put("/experiences/:id", experienceControllers.edit);
router.post("/experiences", experienceControllers.add);
router.delete("/experiences/:id", experienceControllers.destroy);

module.exports = router;
