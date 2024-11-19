// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".my-button"); // Select the button
    const card = document.querySelector(".card"); // Select the card

    // Initially hide the card
    card.style.display = "none";

    // Add a click event listener to the button
    button.addEventListener("click", function () {
        if (card.style.display === "none") {
            card.style.display = "block"; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
});
