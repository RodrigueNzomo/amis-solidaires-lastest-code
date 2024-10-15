const { validationResult } = require("express-validator");
const Membre = require("../models/Membre");

// Ajouter un membre
exports.ajouterMembre = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newMembre = await Membre.create(req.body);
    res
      .status(201)
      .json({ message: "Membre ajouté avec succès", data: newMembre });
  } catch (error) {
    next(error);
  }
};

// Récupérer les membres
exports.getMembres = async (req, res, next) => {
  try {
    const membres = await Membre.find();
    res.status(200).json({ message: "Liste des membres", data: membres });
  } catch (error) {
    next(error);
  }
};

// Modifier un membre
exports.modifierMembre = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const membre = await Membre.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!membre) {
      return res.status(404).json({ message: "Membre non trouvé" });
    }

    res
      .status(200)
      .json({ message: "Membre modifié avec succès", data: membre });
  } catch (error) {
    next(error);
  }
};

// Supprimer un membre
exports.supprimerMembre = async (req, res, next) => {
  try {
    const membre = await Membre.findByIdAndDelete(req.params.id);
    if (!membre) {
      return res.status(404).json({ message: "Membre non trouvé" });
    }

    res.status(200).json({ message: "Membre supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};
