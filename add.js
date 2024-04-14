document.getElementById("addForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const count = document.getElementById("count").value;

    const gumballMachineData = {
        count: count
    };

    fetch("http://localhost:8080/gumballs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(gumballMachineData)
    })
    .then(response => {
        console.log("Response status:", response.status); // Log the response status
        return response.text(); // Parse response body as text
    })
    .then(text => {
        console.log("Response text:", text); // Log the response text
        if (text.trim()) { // Check if response text is not empty or only whitespace
            alert("Gumball machine added successfully.");
            window.location.href = "findAll.html";
        } else {
            alert("Failed to add gumball machine. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});
