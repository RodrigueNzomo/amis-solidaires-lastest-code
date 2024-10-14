document.addEventListener("DOMContentLoaded", () => {
  const pretForm = document.getElementById("pretForm");
  if (pretForm) {
    pretForm.addEventListener("submit", handleFormSubmit);
  }
  fetchPrets();
});

async function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const pretData = {
    beneficiaire: formData.get("beneficiaire"),
    montant: formData.get("montant"),
    interet: formData.get("interet"),
    duree: formData.get("duree"),
  };

  try {
    const response = await fetch("/api/prets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pretData),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Prêt enregistré avec succès");
      window.location.reload();
    } else {
      alert(data.message || "Erreur lors de l'enregistrement du prêt");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue lors de la requête");
  }
}

async function fetchPrets() {
  try {
    const response = await fetch("/api/prets", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const prets = await response.json();
    if (response.ok) {
      const pretsContainer = document.getElementById("pretsContainer");
      prets.forEach((pret) => {
        const pretElement = document.createElement("div");
        pretElement.classList.add("pret-item");
        pretElement.textContent = `${pret.beneficiaire} - ${pret.montant} - ${pret.interet} - ${pret.duree}`;
        pretsContainer.appendChild(pretElement);
      });
    } else {
      alert(prets.message || "Erreur lors de la récupération des prêts");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue lors de la requête");
  }
}
