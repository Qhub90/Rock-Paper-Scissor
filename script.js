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

// ==============        This function takes in CPU & Players input, determines who wins and keeps score     =================

let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

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
  console.log(
    "Score: " +
      "You " +
      playerScore +
      " Computer " +
      cpuScore +
      " Draws " +
      draw
  );
};

// =============  This function allows the game to be played 5 times then reports the winner ==========================

let game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissor?");
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
  }

  if (playerScore > cpuScore) {
    console.log("You Win!!");
  } else if (playerScore < cpuScore) {
    console.log("You Lose....");
  } else {
    console.log("Draw");
  }
};

// =========================== Initiates the game  ================================

game();
