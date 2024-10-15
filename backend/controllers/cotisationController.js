// backend/controllers/cotisationController.js
const Cotisation = require("../models/Cotisation");

exports.createCotisation = async (req, res) => {
  try {
    const cotisation = new Cotisation(req.body);
    await cotisation.save();
    res.status(201).json(cotisation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
};

exports.getAllCotisations = async (req, res) => {
  try {
    const cotisations = await Cotisation.find().populate("membre");
    res.json(cotisations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
};
