// backend/routes/aideRoutes.js
const express = require("express");
const Aide = require("../models/Aide");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Ajouter une aide
router.post("/", authMiddleware, async (req, res) => {
  try {
    const aide = new Aide(req.body);
    await aide.save();
    res.status(201).json(aide);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
});

// Récupérer toutes les aides
router.get("/", authMiddleware, async (req, res) => {
  try {
    const aides = await Aide.find().populate("beneficiaire");
    res.json(aides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
});

module.exports = router;
