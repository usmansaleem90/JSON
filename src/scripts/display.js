// Initialize the jsonData array outside the event listener
const jsonData = [];

document.getElementById("dataForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let userFormValues = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value
    };
    
    // Destructuring the object
    let { name, email, age } = userFormValues;

    if (name.length < 3 ) {
        alert("Name must be at least 3 characters.");
    } else {
        let data = {
            name,
            email,
            age
        };

        // Push the data object into the jsonData array
        jsonData.push(data);

        // Update UI
        document.getElementById("jsonData").textContent = JSON.stringify(jsonData, null, 2);

        // Clear form
        document.getElementById("dataForm").reset();
    }
    
});
