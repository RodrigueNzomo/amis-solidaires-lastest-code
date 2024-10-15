// Refactorisation du script du formulaire d'inscription
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("form");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirm-password");
  const nameInput = document.querySelector("#name");

  // Gestion de la soumission du formulaire
  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      email: emailInput?.value.trim(),
      password: passwordInput?.value.trim(),
      confirmPassword: confirmPasswordInput?.value.trim(),
      name: nameInput?.value.trim(),
    };

    if (!validateFormData(formData)) return;

    // Attribution du rôle par défaut
    const userRole = "Membre";

    // Stocker les informations de l'utilisateur dans localStorage (à remplacer par une implémentation backend)
    localStorage.setItem("userRole", userRole);
    localStorage.setItem("userName", formData.name);

    // Redirection vers le tableau de bord
    window.location.href = "dashboard.html";
  });

  // Basculer la visibilité du mot de passe
  setupPasswordToggle("#password", "#password-toggle");
  setupPasswordToggle("#confirm-password", "#confirm-password-toggle");
});

// Fonction pour valider les données du formulaire
function validateFormData({ email, password, confirmPassword, name }) {
  if (!email || !password || !name) {
    alert("Tous les champs doivent être remplis.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
    return false;
  }

  return true;
}

// Fonction pour configurer le basculement de la visibilité du mot de passe
function setupPasswordToggle(passwordSelector, toggleSelector) {
  const passwordField = document.querySelector(passwordSelector);
  const toggleIcon = document.querySelector(toggleSelector);

  if (passwordField && toggleIcon) {
    toggleIcon.addEventListener("click", () => {
      togglePasswordVisibility(passwordField, toggleIcon);
    });
  }
}

// Fonction pour basculer la visibilité du mot de passe
function togglePasswordVisibility(passwordField, toggleIcon) {
  const isPasswordHidden = passwordField.type === "password";
  passwordField.type = isPasswordHidden ? "text" : "password";
  toggleIcon.classList.toggle("fa-eye", !isPasswordHidden);
  toggleIcon.classList.toggle("fa-eye-slash", isPasswordHidden);
}
