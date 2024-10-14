// aide.js

document.addEventListener("DOMContentLoaded", () => {
  const aideForm = document.getElementById("aideForm");
  if (aideForm) {
    aideForm.addEventListener("submit", handleSubmit);
  }
  fetchAides();
});

async function handleSubmit(event) {
  event.preventDefault();

  const beneficiaire = document.getElementById("beneficiaire").value;
  const montant = document.getElementById("montant").value;
  const motif = document.getElementById("motif").value;

  try {
    const response = await fetch("/api/aides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ beneficiaire, montant, motif }),
    });

    const data = await response.json();
    handleResponse(response, data);
  } catch (error) {
    handleError(error);
  }
}

async function fetchAides() {
  try {
    const response = await fetch("/api/aides", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const aides = await response.json();
    handleResponse(response, aides, true);
  } catch (error) {
    handleError(error);
  }
}

function handleResponse(response, data, isFetch = false) {
  if (response.ok) {
    if (isFetch) {
      displayAides(data);
    } else {
      alert("Aide enregistrée avec succès");
      window.location.reload();
    }
  } else {
    alert(data.message || "Erreur lors de l'enregistrement de l'aide");
  }
}

function displayAides(aides) {
  const aidesContainer = document.getElementById("aidesContainer");
  aides.forEach((aide) => {
    const aideElement = document.createElement("div");
    aideElement.classList.add("aide-item");
    aideElement.textContent = `${aide.beneficiaire} - ${aide.montant} - ${aide.motif}`;
    aidesContainer.appendChild(aideElement);
  });
}

function handleError(error) {
  console.error("Erreur:", error);
  alert("Une erreur est survenue lors de la requête");
}
