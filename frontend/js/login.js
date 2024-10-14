// login.js - Gestion de la connexion avec attribution de rôles et redirection appropriée

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const passwordToggle = document.querySelector("#password-toggle");

  // Gestion de la soumission du formulaire de connexion
  loginForm.addEventListener("submit", handleLogin);

  // Fonction pour gérer la connexion
  function handleLogin(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const userRole = getUserRole(email, password);
    if (!userRole) {
      alert("Identifiants incorrects. Veuillez réessayer.");
      return;
    }

    // Stocker le rôle de l'utilisateur dans localStorage
    localStorage.setItem("userRole", userRole);

    // Rediriger vers le tableau de bord
    window.location.href = "dashboard.html";
  }

  // Fonction pour déterminer le rôle de l'utilisateur
  function getUserRole(email, password) {
    const users = {
      "president@example.com": "Président",
      "tresorier@example.com": "Trésorier",
      "commissaire@example.com": "CommissaireAuxComptes",
      "censeur@example.com": "Censeur",
      "presidentcomite@example.com": "PrésidentDuComite",
      "membre@example.com": "Membre",
    };

    return users[email] && password === "password123" ? users[email] : null;
  }

  // Gestion de l'affichage/masquage du mot de passe
  if (passwordToggle) {
    passwordToggle.addEventListener("click", togglePasswordVisibility);
  }

  function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      passwordInput.type = "password";
      passwordToggle.classList.replace("fa-eye-slash", "fa-eye");
    }
  }

  // Fonction pour étirer la section sur toute la largeur
  stretchSectionToFullWidth(".about-section", ".about-image");
});

// Fonction pour étirer une section sur toute la largeur
function stretchSectionToFullWidth(sectionSelector, imageSelector) {
  const section = document.querySelector(sectionSelector);

  if (section) {
    section.style.width = "100%";
    section.style.maxWidth = "none";
    section.style.margin = "0";
    section.style.padding = "2rem";

    const image = section.querySelector(imageSelector);
    if (image) {
      image.style.width = "100%";
      image.style.height = "auto";
    }
  }
}
