// backend/controllers/pretController.js
const Pret = require("../models/Pret");

exports.createPret = async (req, res) => {
  try {
    const pret = new Pret(req.body);
    await pret.save();
    res.status(201).json(pret);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
};

exports.getAllPrets = async (req, res) => {
  try {
    const prets = await Pret.find().populate("beneficiaire");
    res.json(prets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
};
