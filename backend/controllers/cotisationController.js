// cotisationController.js

const { validationResult } = require("express-validator");
const Cotisation = require("../models/Cotisation"); // Assurez-vous que le modèle est importé

// Ajouter une cotisation
const ajouterCotisation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const nouvelleCotisation = await Cotisation.create(req.body);
    res.status(201).json({
      message: "Cotisation ajoutée avec succès",
      data: nouvelleCotisation,
    });
  } catch (error) {
    next(error);
  }
};

// Récupérer les cotisations
const getCotisations = async (req, res, next) => {
  try {
    const cotisations = await Cotisation.find();
    res
      .status(200)
      .json({ message: "Liste des cotisations", data: cotisations });
  } catch (error) {
    next(error);
  }
};

// Modifier une cotisation
const modifierCotisation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const cotisation = await Cotisation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!cotisation) {
      return res.status(404).json({ message: "Cotisation non trouvée" });
    }

    res
      .status(200)
      .json({ message: "Cotisation modifiée avec succès", data: cotisation });
  } catch (error) {
    next(error);
  }
};

// Supprimer une cotisation
const supprimerCotisation = async (req, res, next) => {
  try {
    const cotisation = await Cotisation.findByIdAndDelete(req.params.id);
    if (!cotisation) {
      return res.status(404).json({ message: "Cotisation non trouvée" });
    }

    res.status(200).json({ message: "Cotisation supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

// Exporter les fonctions
module.exports = {
  ajouterCotisation,
  getCotisations,
  modifierCotisation,
  supprimerCotisation,
};
