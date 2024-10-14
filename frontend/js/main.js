// Fichier JavaScript principal pour l'application Amis Solidaires

// Configuration du carrousel
const carousel = new bootstrap.Carousel(".carousel", {
  interval: 5000,
  ride: "carousel",
  pause: false,
  wrap: true,
});

// Ajouter un défilement fluide aux liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Changement de couleur de la barre de navigation lors du défilement
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Initialisation des info-bulles
document
  .querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

// Événement de soumission de formulaire (pour rejoindre la communauté)
document.querySelector(".join-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  alert(
    `Merci de rejoindre la communauté, ${name}! Nous sommes heureux de vous accueillir.`
  );
});
