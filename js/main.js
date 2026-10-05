const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
    const passwordIsHidden = passwordInput.type === "password";

    passwordInput.type = passwordIsHidden ? "text" : "password";

    const icon = togglePasswordButton.querySelector("i");

    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
});