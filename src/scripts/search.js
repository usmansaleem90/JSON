
const  searchByEmail = (email) => {
    const foundData = []
    
    for (let i in jsonData){
        if (jsonData[i].email === email){
            foundData.push(jsonData[i])
        }
    }
    if (foundData.length>=1) {
        // Display the found data
        document.getElementById("FindData").textContent = JSON.stringify(foundData, null, 2);
        document.getElementById("jsonData").textContent = "";

        
    } else {
        // Display a message if the name is not found
        document.getElementById("FindData").textContent = "User not found.";
        document.getElementById("jsonData").textContent = "";

    }
}

// Add an event listener for the search button
document.getElementById("searchButton").addEventListener("click", () => {
    const emailToSearch = document.getElementById("f_email").value;
    searchByEmail(emailToSearch);
});