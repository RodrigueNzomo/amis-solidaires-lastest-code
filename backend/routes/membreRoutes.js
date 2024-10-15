// backend/routes/membreRoutes.js
const express = require("express");
const Membre = require("../models/Membre");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Créer un membre
router.post("/", authMiddleware, async (req, res) => {
  try {
    const membre = new Membre(req.body);
    await membre.save();
    res.status(201).json(membre);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
});

// Récupérer tous les membres
router.get("/", authMiddleware, async (req, res) => {
  try {
    const membres = await Membre.find();
    res.json(membres);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
});

module.exports = router;
