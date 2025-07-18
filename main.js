let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";
let roundNum = 0;

const getComputerChoice = () => {
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

const getHumanChoice = () => {
    rockBtn.addEventListener("click", (e) => {
        return "rock";
    });
    paperBtn.addEventListener("click", (e) =>{
        return "paper";
    });
    scissorsBtn.addEventListener("click", (e) => {
        return "scissors";
    });
};

const isHumanWin = (humanSelection, computerSelection) => {
    if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") 
    ) {
        return true;
    }
    return false;
};

const isDraw = (humanSelection, computerSelection) => {
    if (
        (humanSelection === "rock" && computerSelection === "rock") ||
        (humanSelection === "paper" && computerSelection === "paper") ||
        (humanSelection === "scissors" && computerSelection === "scissors")
    ) {
        return true;
    }
    return false;
};

const playRound = (humanSelection) => {
    roundNum++;
    computerSelection = getComputerChoice();
    
    const roundInfo = document.createElement("p");
    roundInfo.textContent = `Round ${roundNum} - You: ${humanSelection} vs Computer: ${computerSelection}`;
    resultMsg.appendChild(roundInfo);

    if (isDraw(humanSelection, computerSelection)) {
        const resultText = document.createElement("p");
        resultText.textContent = "This round draws!";
        resultMsg.appendChild(resultText);
    } else if (isHumanWin(humanSelection, computerSelection)) {
        const resultText = document.createElement("p");
        resultText.textContent = "You scores!";
        resultMsg.appendChild(resultText);
        humanScore++;
    } else {
        const resultText = document.createElement("p");
        resultText.textContent = "Computer scores!";
        resultMsg.appendChild(resultText);
        computerScore++;
    }
    checkEnd();
};

const checkEnd = () => {
    if (humanScore === 3) {
        const congratMsg = document.createElement("h2");
        congratMsg.textContent = "You Wins!";
        resultMsg.appendChild(congratMsg);
        resetGame();
    } else if (computerScore === 3) {
        const congratMsg = document.createElement("h2");
        congratMsg.textContent = "Computer Wins!";
        resultMsg.appendChild(congratMsg);
        resetGame();
    }
};


const showChoice = () => {
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "rock";
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "paper";
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "scissors";
    choice.append(rockBtn, paperBtn, scissorsBtn);

    rockBtn.addEventListener("click", () => playRound("rock"));
    paperBtn.addEventListener("click", () => playRound("paper"));
    scissorsBtn.addEventListener("click", () => playRound("scissors"));
};

const startGame = () => {
    const startMsg = document.createElement("h1");
    startMsg.textContent = "Game Start!!";
    msg.appendChild(startMsg);
    startBtn.remove();
    showChoice();
};

const resetGame = () => {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Play again";
    resetBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        humanSelection = "";
        computerSelection = "";
        roundNum = 0;
    });
    resultMsg.appendChild(resetBtn);
};

const startBtn = document.querySelector("#gameStart");
const choice = document.querySelector("#btnContainer");
const msg = document.querySelector("#msg")
const resultMsg = document.querySelector("#result");

startBtn.addEventListener("click", startGame);
