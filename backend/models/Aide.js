// backend/models/Aide.js
const mongoose = require("mongoose");

const AideSchema = new mongoose.Schema(
  {
    beneficiaire: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Membre",
      required: true,
    },
    typeAide: {
      type: String,
      required: true,
    },
    montant: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Aide", AideSchema);
