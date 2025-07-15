let humanScore = 0;
let computerScore = 0;

// This is function expression
let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3 + 1);
    console.log(random);
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else if (random === 3) {
        return "scissors";
    }
};

let getHumanChoice = () => prompt("Rock / Paper / Scissors ?").toLowerCase();

let playRound = (humanSelection, computerSelection) => {
    if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            console.log("Pc win.");
        } else if (computerSelection === "scissors") {
            humanScore++;
            console.log("Human win.");
        } else {
            console.log("Draw");
        }
    } else if (humanSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            console.log("Pc win.");
        } else if (computerSelection === "rock") {
            humanScore++;
            console.log("Human win.");
        } else {
            console.log("Draw");
        }
    } else if (humanSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            console.log("Pc win.");
        } else if (computerSelection === "paper") {
            humanScore++;
            console.log("Human win.");
        } else {
            console.log("Draw");
        }
    }
};

let playGame = () => {
    let humanSelection = "";
    let computerSelection = "";
    while (humanScore != 3 && computerScore != 3) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 3) {
        console.log("Human Wins!!");
    } else {
        console.log("Computer Wins!!")
    }
};

playGame();