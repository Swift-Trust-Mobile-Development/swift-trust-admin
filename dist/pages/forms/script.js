document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  alert("Login attempted for: " + email);
});

document.getElementById("forgotPasswordForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  alert("Password reset link sent to: " + email);
});

