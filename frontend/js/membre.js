// membre.js

document.addEventListener("DOMContentLoaded", () => {
  const membreForm = document.getElementById("membreForm");
  if (membreForm) {
    membreForm.addEventListener("submit", handleFormSubmit);
  }
  fetchMembres();
});

async function handleFormSubmit(event) {
  event.preventDefault();

  const membreData = {
    nom: document.getElementById("nom").value,
    email: document.getElementById("email").value,
    telephone: document.getElementById("telephone").value,
  };

  try {
    const response = await fetch("/api/membres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(membreData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Membre ajouté avec succès");
      window.location.reload();
    } else {
      alert(data.message || "Erreur lors de l'ajout du membre");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue lors de la requête");
  }
}

async function fetchMembres() {
  try {
    const response = await fetch("/api/membres", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const membres = await response.json();

    if (response.ok) {
      const membresContainer = document.getElementById("membresContainer");
      membres.forEach((membre) => {
        const membreElement = document.createElement("div");
        membreElement.classList.add("membre-item");
        membreElement.textContent = `${membre.nom} - ${membre.email} - ${membre.telephone}`;
        membresContainer.appendChild(membreElement);
      });
    } else {
      alert(membres.message || "Erreur lors de la récupération des membres");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue lors de la requête");
  }
}
