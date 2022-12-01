const container = document.querySelector('#container');

const displayRoundNum = document.querySelector('.displayRoundNum');
const displayUserScore = document.querySelector('.displayUserScore');
const displayComputerScore = document.querySelector('.displayComputerScore');
const displayDraws = document.querySelector('.displayDraws');
const roundWinner = document.querySelector('.roundWinner');
const finalScore = document.querySelector('.finalScore');

const results = document.createElement('div');







const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
  // button.addEventListener('click', handleClick);
  button.addEventListener('click', (e) => {
      let playerSelection = e.target.value;
      console.log(playerSelection);
      playRound(playerSelection);
      if (computerScore == 5){
        alert('Game over')
        finalScore.textContent = 'Computer wins!';
      }
      if (userScore == 5){
        alert('Game over')
        finalScore.textContent = 'You win!';
      }
  });
})

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}


function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
    userScore++
    totalRound++
    roundWinner.textContent = `You win
    ${playerSelection} beats ${computerSelection}`;
    

  } if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
      computerScore++;
      totalRound++
      roundWinner.textContent = `Computer wins
      ${computerSelection} beats ${playerSelection}`;
    }
    if ((playerSelection === computerSelection)){
      draws++
      totalRound++
      roundWinner.textContent = 'Tie! Go again';
    }
    
    displayRoundNum.textContent = `${totalRound}`;
    displayUserScore.textContent = `${userScore}`;
    displayComputerScore.textContent = `${computerScore}`;
    displayDraws.textContent = `${draws}`;
  }

 
  let computerScore = 0;
  let userScore = 0;
  let draws = 0;
  let totalRound = 0;
