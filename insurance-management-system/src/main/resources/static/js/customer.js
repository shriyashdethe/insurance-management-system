const BASE_URL = "http://localhost:8082/customers";

const TOKEN = "ADMIN123";

// Save Customer
function saveCustomer() {

    const customer = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        dateOfBirth: document.getElementById("dateOfBirth").value,
        accountStatus: document.getElementById("accountStatus").value
    };

    fetch(BASE_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": TOKEN
        },

        body: JSON.stringify(customer)

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Status : " + response.status);
        }

        return response.json();

    })

    .then(data => {

        alert("Customer Saved Successfully");

        clearForm();

        loadCustomers();

    })

    .catch(error => {

        alert("❌ Error : " + error.message);

        console.log(error);

    });

}


// Load Customers

function loadCustomers() {

    fetch(BASE_URL, {

        headers: {
            "X-Auth-Token": TOKEN
        }

    })

    .then(response => {

        if (!response.ok) {

            throw new Error("Status : " + response.status);

        }

        return response.json();

    })

    .then(customers => {

        let rows = "";

        customers.forEach(c => {

			rows += `
			<tr>

			<td>${c.id}</td>
			<td>${c.firstName}</td>
			<td>${c.lastName}</td>
			<td>${c.email}</td>
			<td>${c.phoneNumber}</td>
			<td>${c.dateOfBirth}</td>
			<td>${c.accountStatus}</td>

			

			</tr>
			`;

        });

        document.getElementById("customerTable").innerHTML = rows;

    })

    .catch(error => {

        alert("Unable to load customers");

        console.log(error);

    });

}


// Clear Form

function clearForm() {

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("accountStatus").value = "";

}


window.onload = function () {

    loadCustomers();

}
function deleteCustomer(id) {

    if (!confirm("Are you sure you want to delete this customer?")) {
        return;
    }

    fetch(BASE_URL + "/" + id, {

        method: "DELETE",

        headers: {
            "X-Auth-Token": TOKEN
        }

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Delete Failed");
        }

        alert("Customer Deleted Successfully");

        loadCustomers();

    })

    .catch(error => {

        alert(error.message);

    });

}