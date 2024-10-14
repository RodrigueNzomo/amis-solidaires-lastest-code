// dashboard.js - Logique principale pour gérer l'accès au tableau de bord en fonction des rôles des utilisateurs

document.addEventListener("DOMContentLoaded", function () {
  // Obtenir le rôle de l'utilisateur actuel (exemple: supposons qu'il est stocké dans sessionStorage)
  const userRole = sessionStorage.getItem("userRole");

  // Sélecteurs pour les éléments du tableau de bord
  const gestionMembresLink = document.querySelector(
    ".features-section .card:nth-child(1) .btn"
  );
  const gestionCotisationsLink = document.querySelector(
    ".features-section .card:nth-child(2) .btn"
  );
  const gestionAidesLink = document.querySelector(
    ".features-section .card:nth-child(3) .btn"
  );
  const gestionPretsLink = document.querySelector(
    ".features-section .card:nth-child(4) .btn"
  );

  // Désactiver toutes les fonctionnalités par défaut
  gestionMembresLink.style.display = "none";
  gestionCotisationsLink.style.display = "none";
  gestionAidesLink.style.display = "none";
  gestionPretsLink.style.display = "none";

  // Activer les fonctionnalités en fonction du rôle
  switch (userRole) {
    case "Président":
      // Le Président peut accéder à toutes les fonctionnalités
      gestionMembresLink.style.display = "inline-block";
      gestionCotisationsLink.style.display = "inline-block";
      gestionAidesLink.style.display = "inline-block";
      gestionPretsLink.style.display = "inline-block";
      break;
    case "Trésorier":
      // Le Trésorier peut accéder à la gestion des cotisations, des aides et des prêts
      gestionCotisationsLink.style.display = "inline-block";
      gestionAidesLink.style.display = "inline-block";
      gestionPretsLink.style.display = "inline-block";
      break;
    case "CommissaireAuxComptes":
    case "Censeur":
      // Ces rôles ont accès uniquement aux cotisations pour les vérifier
      gestionCotisationsLink.style.display = "inline-block";
      break;
    case "PrésidentDuComite":
      // Le Président du comité a accès à la gestion des membres et des cotisations
      gestionMembresLink.style.display = "inline-block";
      gestionCotisationsLink.style.display = "inline-block";
      break;
    case "Membre":
      // Les membres n'ont accès à aucune fonctionnalité de gestion dans le tableau de bord
      console.log("Rôle: Membre - Accès limité.");
      break;
    default:
      console.warn("Rôle non reconnu, accès restreint.");
      break;
  }

  // Afficher un message en fonction du rôle de l'utilisateur
  const roleMessage = document.createElement("h1");
  roleMessage.classList.add("text-center", "my-5");
  roleMessage.innerText = `Bienvenue, ${userRole} ! Vous êtes maintenant connecté au tableau de bord.`;
  document
    .querySelector(".features-section")
    .insertAdjacentElement("beforebegin", roleMessage);

  // Événements pour le carrousel du livre d'or
  const carouselElement = document.querySelector("#goldenBookCarousel");
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      ride: "carousel",
      pause: false,
    });
  }

  // Bouton pour revenir à la page d'accueil
  const backToHomeButton = document.createElement("button");
  backToHomeButton.innerText = "Retour à l'accueil";
  backToHomeButton.classList.add("btn", "btn-secondary", "back-to-home-button");
  backToHomeButton.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
  document.body.appendChild(backToHomeButton);
});
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer le rôle de l'utilisateur actuel (exemple: supposons qu'il est stocké dans localStorage)
  const userRole = localStorage.getItem("userRole") || "Membre";

  // Sélecteurs pour les éléments de titre et de description du rôle
  const roleTitleElement = document.getElementById("roleTitle");
  const roleDescriptionElement = document.getElementById("roleDescription");

  // Définir le titre et la description en fonction du rôle de l'utilisateur
  switch (userRole) {
    case "Président":
      roleTitleElement.textContent = "Bienvenue, Président de l'association !";
      roleDescriptionElement.textContent =
        "Vous avez accès à toutes les fonctionnalités de gestion de la communauté.";
      break;
    case "Trésorier":
      roleTitleElement.textContent = "Bienvenue, Trésorier !";
      roleDescriptionElement.textContent =
        "Vous pouvez gérer les cotisations et les prêts des membres.";
      break;
    case "CommissaireAuxComptes":
      roleTitleElement.textContent = "Bienvenue, Commissaire aux Comptes !";
      roleDescriptionElement.textContent =
        "Vous avez accès à la vérification des cotisations.";
      break;
    case "Censeur":
      roleTitleElement.textContent = "Bienvenue, Censeur !";
      roleDescriptionElement.textContent =
        "Vous pouvez consulter et vérifier les cotisations des membres.";
      break;
    case "PrésidentDuComite":
      roleTitleElement.textContent = "Bienvenue, Président du Comité !";
      roleDescriptionElement.textContent =
        "Vous pouvez gérer les membres et suivre les cotisations.";
      break;
    case "Membre":
      roleTitleElement.textContent = "Bienvenue, Membre de la communauté !";
      roleDescriptionElement.textContent =
        "Consultez vos informations et restez à jour avec la communauté.";
      break;
    default:
      roleTitleElement.textContent = "Bienvenue sur votre tableau de bord !";
      roleDescriptionElement.textContent =
        "Le contenu du tableau de bord sera personnalisé selon votre rôle dans l'association.";
      break;
  }
});
function handleLogout() {
  // Supprimer les informations utilisateur du stockage local/session
  ["userRole", "isAuthenticated"].forEach((item) => {
    sessionStorage.removeItem(item);
    localStorage.removeItem(item);
  });

  // Rediriger l'utilisateur
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
  window.location.href = isAuthenticated
    ? "../pages/login.html"
    : "../index.html";
}
