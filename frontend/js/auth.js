// auth.js

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        
        if (response.ok) {
          localStorage.setItem('token', data.token);
          window.location.href = '/dashboard.html';
        } else {
          alert(data.message || 'Erreur lors de la connexion');
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
      
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        
        if (response.ok) {
          alert('Inscription réussie, vous pouvez maintenant vous connecter');
          window.location.href = '/login.html';
        } else {
          alert(data.message || 'Erreur lors de l'inscription');
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    });
  }
});