function toggleForm() {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");

    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    } else {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    }
  }

  function validateLogin() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    if (!username || !password) {
      alert("Please enter both username and password.");
    } else {
      alert("Login successful!"); 
    }
  }

  function validateRegister() {
    let username = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;

    if (!username || !password) {
      alert("Please enter both username and password.");
    } else {
      alert("Registration successful!");
    }
  }