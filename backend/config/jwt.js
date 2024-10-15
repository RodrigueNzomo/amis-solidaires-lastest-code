// backend/config/jwt.js: Configuration des paramètres JWT
module.exports = {
  secret: process.env.JWT_SECRET || 'votre_secret_jwt',
  expiresIn: '1h',
};