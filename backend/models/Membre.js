// backend/models/Membre.js
const mongoose = require("mongoose");

const MembreSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    cotisations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cotisation",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Membre", MembreSchema);
