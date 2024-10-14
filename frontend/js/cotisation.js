// cotisation.js

document.addEventListener("DOMContentLoaded", () => {
  const cotisationForm = document.getElementById("cotisationForm");

  if (cotisationForm) {
    cotisationForm.addEventListener("submit", handleCotisationSubmit);
  }

  loadCotisations();
});

async function handleCotisationSubmit(event) {
  event.preventDefault();

  const membre = document.getElementById("membre").value;
  const montant = document.getElementById("montant").value;
  const date = document.getElementById("date").value;

  try {
    const response = await fetch("/api/cotisations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ membre, montant, date }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Cotisation enregistrée avec succès");
      window.location.reload();
    } else {
      alert(data.message || "Erreur lors de l'enregistrement de la cotisation");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue lors de la requête");
  }
}

async function loadCotisations() {
  try {
    const response = await fetch("/api/cotisations", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const cotisations = await response.json();

    if (response.ok) {
      const cotisationsContainer = document.getElementById(
        "cotisationsContainer"
      );
      cotisations.forEach((cotisation) => {
        const cotisationElement = document.createElement("div");
        cotisationElement.classList.add("cotisation-item");
        cotisationElement.textContent = `${cotisation.membre} - ${cotisation.montant} - ${cotisation.date}`;
        cotisationsContainer.appendChild(cotisationElement);
      });
    } else {
      alert(
        cotisations.message || "Erreur lors de la récupération des cotisations"
      );
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue lors de la requête");
  }
}
