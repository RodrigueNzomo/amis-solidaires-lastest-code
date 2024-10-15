// backend/routes/pretRoutes.js
const express = require("express");
const Pret = require("../models/Pret");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Ajouter un prêt
router.post("/", authMiddleware, async (req, res) => {
  try {
    const pret = new Pret(req.body);
    await pret.save();
    res.status(201).json(pret);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
});

// Récupérer tous les prêts
router.get("/", authMiddleware, async (req, res) => {
  try {
    const prets = await Pret.find().populate("beneficiaire");
    res.json(prets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
});

module.exports = router;
