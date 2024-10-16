exports.ajouterPret = async (req, res, next) => {
  try {
    // Votre logique pour ajouter un prêt
    res.status(201).json({ message: "Prêt ajouté avec succès" });
  } catch (error) {
    next(error);
  }
};

// Assurez-vous d'exporter toutes les fonctions
module.exports = {
  ajouterPret,
  getPrets,
  modifierPret,
  supprimerPret,
};
