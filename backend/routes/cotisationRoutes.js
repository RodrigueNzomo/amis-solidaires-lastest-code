// backend/routes/cotisationRoutes.js
const express = require("express");
const Cotisation = require("../models/Cotisation");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Ajouter une cotisation
router.post("/", authMiddleware, async (req, res) => {
  try {
    const cotisation = new Cotisation(req.body);
    await cotisation.save();
    res.status(201).json(cotisation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
});

// Récupérer toutes les cotisations
router.get("/", authMiddleware, async (req, res) => {
  try {
    const cotisations = await Cotisation.find().populate("membre");
    res.json(cotisations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
});

module.exports = router;
