//grab the buttons from the page

const userButtons = document.querySelectorAll(".move-button")
//Get the computer choice and outcome elements from html

const computerChoice = document.querySelector("#computer-choice")

//Get the outcome text
const outcomeText = document.querySelector(".outcome-text")
//When the user chooses a move:
//Assign users choice to a variable

const getUserChoice = (event) => {
    const userChoice = event.target.innerText;
    return "user choice: " + userChoice;
}
//generate a move for the computer
//work out who won
//display the winner

//function to add eventlistenr to element

function updateDOM() {
outcomeText.innerHTML = getUserChoice()};

userButtons.forEach(element => {element.eventlistener("click", updateDOM)})