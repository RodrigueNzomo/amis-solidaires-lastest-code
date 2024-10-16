// cotisationRoutes.js

const express = require("express");
const cotisationController = require("../controllers/cotisationController");

const router = express.Router();

// Routes
router.post("/ajouter", cotisationController.ajouterCotisation);
router.get("/", cotisationController.getCotisations);
router.put("/:id", cotisationController.modifierCotisation);
router.delete("/:id", cotisationController.supprimerCotisation);

module.exports = router;
