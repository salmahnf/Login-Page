document.addEventListener("DOMContentLoaded", function () {
  const showPasswordIcon = document.getElementById("show-password-icon");
  const passwordInput = document.getElementById("password-input");
  const loginButton = document.querySelector("button[type='submit']");

  function togglePasswordVisibility() {
    passwordInput.type = isPasswordVisible ? "password" : "text";
    showPasswordIcon.src = isPasswordVisible ? "tutup.png" : "buka.png";
  }

  function isPasswordValid() {
    return passwordInput.value.length >= 8;
  }

  showPasswordIcon.addEventListener("click", function () {
    isPasswordVisible = !isPasswordVisible;
    togglePasswordVisibility();
  });

  passwordInput.addEventListener("input", function () {
    if (isPasswordValid()) {
      loginButton.removeAttribute("disabled");
      passwordInput.classList.remove("invalid-password");
    } else {
      loginButton.setAttribute("disabled", "true");
      passwordInput.classList.add("invalid-password");
    }
  });

  let isPasswordVisible = false;
  togglePasswordVisibility();
});
