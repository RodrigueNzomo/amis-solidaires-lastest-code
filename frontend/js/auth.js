// auth.js (refactorisé)

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const handleFormSubmit = async (
    url,
    body,
    successCallback,
    errorCallback
  ) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (response.ok) {
        successCallback(data);
      } else {
        errorCallback(data.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Erreur:", error);
      errorCallback("Une erreur est survenue lors de la requête");
    }
  };

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      handleFormSubmit(
        "/api/auth/login",
        { email, password },
        (data) => {
          localStorage.setItem("token", data.token);
          window.location.href = "/dashboard.html";
        },
        (message) => alert(message)
      );
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas");
        return;
      }

      handleFormSubmit(
        "/api/auth/register",
        { email, password },
        () => {
          alert("Inscription réussie, vous pouvez maintenant vous connecter");
          window.location.href = "/login.html";
        },
        (message) => alert(message)
      );
    });
  }
});
