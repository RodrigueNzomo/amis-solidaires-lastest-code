// register.js - Script pour la page d'inscription
// register.js - Gestion de l'inscription avec validation de l'utilisateur, stockage et redirection

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.querySelector("form");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirm-password");
  const nameInput = document.querySelector("#name");

  // Gestion de la soumission du formulaire d'inscription
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupération des valeurs des champs du formulaire
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const name = nameInput.value.trim();

    // Vérification des mots de passe
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
      return;
    }

    // Vérification de l'email et du mot de passe (logique simple pour l'exemple)
    if (!email || !password || !name) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    // Définition du rôle par défaut
    let userRole = "Membre";

    // Stocker les informations dans localStorage (à adapter avec un backend réel)
    localStorage.setItem("userRole", userRole);
    localStorage.setItem("userName", name);

    // Rediriger vers le tableau de bord
    window.location.href = "dashboard.html";
  });

  // Bouton pour afficher/masquer les mots de passe
  const passwordToggle = document.querySelector("#password-toggle");
  const confirmPasswordToggle = document.querySelector(
    "#confirm-password-toggle"
  );

  if (passwordToggle) {
    passwordToggle.addEventListener("click", function () {
      togglePasswordVisibility(passwordInput, passwordToggle);
    });
  }

  if (confirmPasswordToggle) {
    confirmPasswordToggle.addEventListener("click", function () {
      togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggle);
    });
  }
});

// Fonction pour basculer l'affichage du mot de passe
function togglePasswordVisibility(passwordField, toggleIcon) {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Gestion de l'affichage/masquage du mot de passe
//   const passwordToggle = document.querySelector("#password-toggle");
//   const passwordInput = document.querySelector("#password");

//   if (passwordToggle && passwordInput) {
//     passwordToggle.addEventListener("click", function () {
//       if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         passwordToggle.classList.remove("fa-eye");
//         passwordToggle.classList.add("fa-eye-slash");
//       } else {
//         passwordInput.type = "password";
//         passwordToggle.classList.remove("fa-eye-slash");
//         passwordToggle.classList.add("fa-eye");
//       }
//     });
//   }

//   // Validation du formulaire d'inscription
//   const registerForm = document.querySelector("#register-form");

//   if (registerForm) {
//     registerForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const email = document.querySelector("#email").value;
//       const password = document.querySelector("#password").value;
//       const confirmPassword = document.querySelector("#confirm-password").value;

//       if (password !== confirmPassword) {
//         alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
//       } else {
//         // Soumettre le formulaire (simulé ici)
//         alert("Inscription réussie ! Bienvenue sur Amis Solidaires.");
//         registerForm.reset();
//       }
//     });
//   }
// });
