const express = require("express");
const membreController = require("../controllers/membreController");

const router = express.Router();

// Routes
router.post("/ajouter", membreController.ajouterMembre);
router.get("/", membreController.getMembres);
router.put("/:id", membreController.modifierMembre);
router.delete("/:id", membreController.supprimerMembre);

module.exports = router;
