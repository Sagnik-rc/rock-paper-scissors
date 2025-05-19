const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const resetButton = document.getElementById('reset-btn');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getWinner(user, computer) {
    if (user === computer) return "It's a draw!";
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        userScore++;
        updateScore();
        return "You win!";
    } else {
        computerScore++;
        updateScore();
        return "You lose!";
    }
}

function updateScore() {
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = getWinner(userChoice, computerChoice);
        resultText.innerText = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
    });
});

resetButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    updateScore();
    resultText.innerText = '';
});
