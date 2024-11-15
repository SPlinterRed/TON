const alpha = document.getElementById("Hello");  // Get the element with ID "Hello"

// Create a new h1 element
const beta = document.createElement("h1");

// Set the inner HTML content of the new h1 element
beta.innerHTML = "MAAYONG GABII MULA SA IMONG JABASKRIP";  // Text content, no need to wrap in <h1> tag

// Append the new h1 element to the element with ID "Hello"
alpha.append(beta);