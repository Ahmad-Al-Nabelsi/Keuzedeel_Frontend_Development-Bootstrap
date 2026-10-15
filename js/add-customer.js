
const customerForm = document.getElementById("customerForm");

customerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    customerForm.classList.add("was-validated");

    if (!customerForm.checkValidity()) {
        return;
    }

    const customer = {
        id: Date.now().toString(),
        naam: document.getElementById("customerName").value.trim(),
        geslacht: document.getElementById("customerGender").value,
        land: document.getElementById("customerCountry").value.trim(),
        leeftijd: Number(document.getElementById("customerAge").value)
    };

    if (!customer.naam || !customer.land) {
        return;
    }

    const customers = JSON.parse(
        localStorage.getItem("customers") || "[]"
    );

    customers.push(customer);

    localStorage.setItem("customers", JSON.stringify(customers));

    window.location.href = "dashboard.html";
});