document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const machineId = document.getElementById("machineId").value;
    const newCount = document.getElementById("newCount").value;
    const gumballMachineData = {
        id: machineId,
        count: newCount
    };


    fetch("http://localhost:8080/gumballs", {
        method: "PUT",
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
            alert("Gumball machine updated successfully.");
            window.location.href = "index.html";
        } else {
            alert("Failed to update gumball machine. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});
