const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

const customerSearch = document.getElementById("customerSearch");
const customerTable = document.getElementById("customerTable");

if (togglePasswordButton && passwordInput) {

togglePasswordButton.addEventListener("click", function () {
    const passwordIsHidden = passwordInput.type === "password";

    passwordInput.type = passwordIsHidden ? "text" : "password";

    const icon = togglePasswordButton.querySelector("i");

    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
});

}


if (customerSearch && customerTable) {
    
    customerSearch.addEventListener("input", function () {

        const searchValue = customerSearch.value.toLowerCase();

        const rows = customerTable.querySelectorAll("tbody tr");

        rows.forEach(function (row) {

            const customerName =
                row.children[1].textContent.toLowerCase();

            const customerCountry =
                row.children[3].textContent.toLowerCase();

            const customerMatches =
                customerName.includes(searchValue) ||
                customerCountry.includes(searchValue);

            row.style.display =
                customerMatches ? "" : "none";

        });

    });

}