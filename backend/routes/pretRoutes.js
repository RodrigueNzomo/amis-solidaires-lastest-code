const express = require("express");
const pretController = require("../controllers/pretController");

const router = express.Router();

// Assurez-vous que chaque route a bien un callback fonctionnel
router.post("/ajouter", pretController.ajouterPret);
router.get("/", pretController.getPrets);
router.put("/:id", pretController.modifierPret);
router.delete("/:id", pretController.supprimerPret);

module.exports = router;
