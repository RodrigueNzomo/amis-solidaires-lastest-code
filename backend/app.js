// backend/app.js: Point d'entrée de l'application Node.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const authRoutes = require("./routes/authRoutes");
const membreRoutes = require("./routes/membreRoutes");
const cotisationRoutes = require("./routes/cotisationRoutes");
const pretRoutes = require("./routes/pretRoutes");
const aideRoutes = require("./routes/aideRoutes");
const errorHandler = require("./middleware/errorHandler");

// Initialisation de l'application
dotenv.config();
const app = express();

// Middlewares de sécurité et de logs
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.error("Erreur de connexion à MongoDB", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/membres", membreRoutes);
app.use("/api/cotisations", cotisationRoutes);
app.use("/api/prets", pretRoutes);
app.use("/api/aides", aideRoutes);

// Gestion des erreurs
app.use(errorHandler);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
