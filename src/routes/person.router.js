const express = require("express");
const router = express.Router();
const personsController = require("../controllers/person.controller");

router
  .get("/", personsController.get)
  .get("/:id", personsController.getById)
  .post("/", personsController.create)
  .put("/:id", personsController.update)
  .delete("/:id", personsController._delete);

module.exports = router;
