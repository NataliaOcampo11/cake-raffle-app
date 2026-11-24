// Creates an empty array to store participant names
let participants = [];

// Gets the elements from the HTML
const form = document.getElementById("raffle-form");
const nameInput = document.getElementById("name");
const participantList = document.getElementById("participants");
const winnerMessage = document.getElementById("winner");
const drawButton = document.getElementById("draw");
const resetButton = document.getElementById("reset");

// Runs when the Enter button is clicked
form.addEventListener("submit", function(event) {

    // Prevents the page from reloading
    event.preventDefault();

    // Gets the name and removes extra spaces
    const name = nameInput.value.trim();

    // Ignores blank names
    if (name === "") {
        return;
    }

    // Adds the name to the array
    participants.push(name);

    // Creates a new item in the visible list
    const listItem = document.createElement("li");
    listItem.textContent = name;
    participantList.appendChild(listItem);

    // Clears the input
    nameInput.value = "";
});

// Runs when the Draw button is clicked
drawButton.addEventListener("click", function() {

    // Checks if there are no participants
    if (participants.length === 0) {
        winnerMessage.textContent = "Please add a name first!";
        return;
    }

    // Generates a random position in the array
    const randomIndex = Math.floor(Math.random() * participants.length);

    // Selects the winning participant
    const winner = participants[randomIndex];

    // Displays the winner
    winnerMessage.textContent = "🎉 " + winner + " wins the cake! 🍰";
});

// Runs when the Reset button is clicked
resetButton.addEventListener("click", function() {

    // Empties the array
    participants = [];

    // Clears the visible participant list
    participantList.innerHTML = "";

    // Clears the winner message
    winnerMessage.textContent = "";

    // Clears the name input
    nameInput.value = "";
});