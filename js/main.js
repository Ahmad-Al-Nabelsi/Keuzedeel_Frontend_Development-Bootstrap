
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

const customerSearch = document.getElementById("customerSearch");
const customerTable = document.getElementById("customerTable");

// Wachtwoord tonen en verbergen
if (passwordInput && togglePasswordButton) {

    togglePasswordButton.addEventListener("click", function () {

        const passwordIsHidden = passwordInput.type === "password";

        passwordInput.type = passwordIsHidden
            ? "text"
            : "password";

        const icon = togglePasswordButton.querySelector("i");

        icon.classList.toggle("bi-eye");
        icon.classList.toggle("bi-eye-slash");
    });
}


// Klantenoverzicht
if (customerSearch && customerTable) {

    // Klanten ophalen uit localStorage
const customers = JSON.parse(
    localStorage.getItem("customers") || "[]"
);

// Tabel leegmaken voordat klanten worden getoond
const tableBody = customerTable.querySelector("tbody");

tableBody.innerHTML = "";

if (customers.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.colSpan = 6;
    cell.className = "text-center text-secondary py-4";
    cell.textContent = "Er zijn nog geen klanten toegevoegd.";

    row.appendChild(cell);
    tableBody.appendChild(row);
}

    // Klanten tonen in de tabel
    customers.forEach(function (customer, index) {

        const row = document.createElement("tr");

        row.dataset.customerId = customer.id;

        const values = [
            index + 1,
            customer.naam,
            customer.geslacht,
            customer.land,
            customer.leeftijd
        ];

        values.forEach(function (value) {

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);
        });

        // Actieknoppen
        const actionsCell = document.createElement("td");

        actionsCell.innerHTML = `
            <button type="button"
                    class="btn btn-sm btn-primary"
                    aria-label="Klant bekijken"
                    title="Bekijken">
                <i class="bi bi-eye"></i>
            </button>

            <button type="button"
                    class="btn btn-sm btn-warning"
                    aria-label="Klant wijzigen"
                    title="Wijzigen">
                <i class="bi bi-pencil"></i>
            </button>

            <button type="button"
                    class="btn btn-sm btn-danger"
                    aria-label="Klant verwijderen"
                    title="Verwijderen">
                <i class="bi bi-trash"></i>
            </button>
        `;

        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });


    // Zoekfunctie
    customerSearch.addEventListener("input", function () {

        const searchValue = customerSearch.value
            .trim()
            .toLowerCase();

        const rows = customerTable.querySelectorAll("tbody tr");

        rows.forEach(function (row) {

            const customerName =
                row.children[1].textContent.toLowerCase();

            const customerCountry =
                row.children[3].textContent.toLowerCase();

            const customerMatches =
                customerName.includes(searchValue) ||
                customerCountry.includes(searchValue);

            row.style.display = customerMatches ? "" : "none";
        });
    });
}