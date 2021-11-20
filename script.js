//grab the buttons from the page

const userButtons = document.querySelectorAll(".move-button")
console.log(userButtons)
//Get the computer choice and outcome elements from html

const computerChoice = document.querySelector("#computer-choice")

//Get the outcome text
const outcomeText = document.querySelector(".outcome-text")
//When the user chooses a move:
//Assign users choice to a variable

const getUserChoice = (event) => {
    return event.target.innerText;
};

//generate a move for the computer
const getCompChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    computerChoice.innerText = choices[index];
    return choices[index];
}

//work out who won
const calculateWinner = (event) => {
    const userChoice = getUserChoice(event);
    const compChoice = getCompChoice();
//check if there is a tie
if (userChoice === compChoice) {
    return "It's a tie!"};

if ((userChoice === "Paper" && compChoice === "Scissors") || (userChoice === "Rock" && compChoice === "Paper") || (userChoice === "Scissors" && compChoice === "Rock"))  {
    return "Computer wins!"
} else {
    return "User Wins!"
};

// if (userChoice === "Rock" && compChoice === "Paper") {
//     return "Computer wins!"
// } else {
//     return "User wins!"
// };

// if (userChoice === "Scissors" && compChoice === "Rock") {
//     return "Computer wins!"
// } else {
//     return "User wins!"
// };
};


//display the winner
function updateDOM(event) {
    outcomeText.textContent = calculateWinner(event)
};
    

//function to add eventlistenr to element
userButtons.forEach((element) => {
    element.addEventListener("click", updateDOM);
});