const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/offers", itemControllers.browse);
router.get("/offers/:id", itemControllers.read);
router.put("/offers/:id", itemControllers.edit);
router.post("/offers", itemControllers.add);
router.delete("/offers/:id", itemControllers.destroy);

router.get("/enterprises", itemControllers.browse);
router.get("/enterprises/:id", itemControllers.read);
router.put("/enterprises/:id", itemControllers.edit);
router.post("/enterprises", itemControllers.add);
router.delete("/enterprises/:id", itemControllers.destroy);

module.exports = router;
