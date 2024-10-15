// backend/controllers/aideController.js
const Aide = require("../models/Aide");

exports.createAide = async (req, res) => {
  try {
    const aide = new Aide(req.body);
    await aide.save();
    res.status(201).json(aide);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
};

exports.getAllAides = async (req, res) => {
  try {
    const aides = await Aide.find().populate("beneficiaire");
    res.json(aides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
};
