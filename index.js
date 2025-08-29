document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("⚠️ Please enter both username and password!");
      return;
    }

    // Save details in localStorage (temporary)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to register page
    window.location.href = "register.html";
  });
});
