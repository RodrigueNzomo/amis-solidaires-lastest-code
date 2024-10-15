// backend/models/Pret.js
const mongoose = require("mongoose");

const PretSchema = new mongoose.Schema(
  {
    beneficiaire: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Membre",
      required: true,
    },
    montant: {
      type: Number,
      required: true,
    },
    interet: {
      type: Number,
      required: true,
    },
    duree: {
      type: Number,
      required: true,
    },
    dateDebut: {
      type: Date,
      default: Date.now,
    },
    statut: {
      type: String,
      enum: ["actif", "remboursé"],
      default: "actif",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pret", PretSchema);
