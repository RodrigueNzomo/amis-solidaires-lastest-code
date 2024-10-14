// utils.js

/**
 * Fonction utilitaire pour valider le format d'un email.
 * @param {string} email - L'adresse email à valider.
 * @returns {boolean} - Renvoie true si le format de l'email est valide, false sinon.
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Fonction utilitaire pour valider la force d'un mot de passe.
 * @param {string} password - Le mot de passe à valider.
 * @returns {boolean} - Renvoie true si le mot de passe répond aux exigences de sécurité, false sinon.
 */
function validatePassword(password) {
  // Le mot de passe doit comporter au moins 8 caractères et contenir au moins un chiffre et une lettre
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
}

/**
 * Fonction utilitaire pour afficher des messages d'erreur sur le formulaire.
 * @param {HTMLElement} element - L'élément HTML où le message doit être affiché.
 * @param {string} message - Le message d'erreur à afficher.
 */
function displayErrorMessage(element, message) {
  element.textContent = message;
  element.style.display = "block";
}

/**
 * Fonction utilitaire pour effacer les messages d'erreur du formulaire.
 * @param {HTMLElement} element - L'élément HTML à partir duquel effacer le message.
 */
function clearErrorMessage(element) {
  element.textContent = "";
  element.style.display = "none";
}

export {
  validateEmail,
  validatePassword,
  displayErrorMessage,
  clearErrorMessage,
};
