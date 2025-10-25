// Ensure Firebase is loaded first

// LOGIN validation with Firebase authentication
document.addEventListener('DOMContentLoaded', function () {
  // Login
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value;
      const error = document.getElementById('loginError');
      error.textContent = "";
      if (!email || email.length < 3) {
        error.textContent = "Please enter a valid email.";
        return;
      }
      if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters.";
        return;
      }
      // Firebase login
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          location.href = "portfolio.html";
        })
        .catch((err) => {
          error.textContent = "Login failed: " + err.message;
        });
    });
  }

  // REGISTRATION validation with Firebase authentication
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value;
      const confirmPassword = document.getElementById('regConfirm').value;
      const error = document.getElementById('registerError');
      error.textContent = "";
      if (name.length < 3) {
        error.textContent = "Name must be at least 3 characters.";
        return;
      }
      const emailPattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        error.textContent = "Enter a valid email address.";
        return;
      }
      if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters.";
        return;
      }
      if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return;
      }
      // Firebase registration
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Optionally, update user profile (displayName)
          userCredential.user.updateProfile({
            displayName: name
          }).then(() => {
            location.href = "index.html";
          });
        })
        .catch((err) => {
          error.textContent = "Registration failed: " + err.message;
        });
    });
  }
});