let computerPlay = () => {
  // The numbers 1,2,3 will correspond with Rock Paper Scissor
  let num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      console.log("Rock");
      break;
    case 1:
      console.log("Paper");
      break;
    case 2:
      console.log("Scissor");
      break;
    default:
      console.log("Something went wrong Brrzzttt");
  }
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
  if (playerSelection === computerSelection) {
    console.log("Tie!!");
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("You Win!!, Rock smashes Scissor");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose... Paper Covers Rock");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("You Win!!... Scissor Shreds Paper");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("You Lose.. Scissor Gets Smashed by Rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win!! Paper Covers Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("You Lose.. Paper Gets Shreded by Scissor");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("You Lose.. Paper Gets Shreded by Scissor");
  } else {
    console.log("Please Type Rock, Paper, or Scissor");
  }
}

  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

