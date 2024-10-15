// backend/controllers/membreController.js
const Membre = require("../models/Membre");

exports.createMembre = async (req, res) => {
  try {
    const membre = new Membre(req.body);
    await membre.save();
    res.status(201).json(membre);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
};

exports.getAllMembres = async (req, res) => {
  try {
    const membres = await Membre.find();
    res.json(membres);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur");
  }
};
