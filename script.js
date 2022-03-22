const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

let playerScore = 0;
let cpuScore = 0;
let draw = 0;
let commentator = "";


// ===================  This function is how the CPU comes up with its choice  ==============================

let computerPlay = () => {
  // The numbers 1,2,3 will correspond with Rock Paper Scissor
  let num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissor";
      break;
    default:
      console.log("Something went wrong Brrzzttt");
  }
};


// ===============================    This section takes in the player input and starts a round        =========================================================

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=> {
  button.addEventListener('click', userSelection)
})

function userSelection(e) {

  let playersChoice = e.target.innerText.toLowerCase();
  let computerSelection = computerPlay();

  playRound(playersChoice,computerSelection)
};




// ==============        This function compares the CPU & Players input and determines who wins. Also keeps score     =================

let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let commentator ="";

  if (playerSelection === computerSelection) {
    commentator = "Tie";
    draw++;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    commentator = "You Win!! Rock smashes Scissor";
    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    commentator = "You Lose.. Paper Covers Rock";
    cpuScore++;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    commentator = "You Win!! Scissor Shreds Paper";
    playerScore++;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    commentator = "You Lose.. Scissor Gets Smashed by Rock";
    cpuScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    commentator = "You Win!! Paper Covers Rock";
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    commentator = "You Lose.. Paper Gets Shreded by Scissor";
    cpuScore++;
  } else {
    commentator = "Please Type Rock, Paper, or Scissor";
  }
  let score =    "Score: " +
      "You " +
      playerScore +
      " Computer " +
      cpuScore +
      " Draws " +
      draw
  ;

  displayResults(commentator, score);

};

const displayResults = (commentator, score) => {
  const resultsDiv = document.querySelector('.results');
  const h2 = document.querySelector('.results h2');
  const h4 = document.querySelector('.results h4');

  h2.textContent = commentator;
  h4.textContent = score;

if(playerScore === 5 ) {
  h2.textContent ='Good Job You Won!!';
  rock.remove();
  paper.remove();
  scissor.remove();

} else if(cpuScore === 5) {
  h2.textContent = 'Ehh better luck next time';
  rock.remove();
  paper.remove();
  scissor.remove();
}
}

// =========================== Initiates the game  ================================



