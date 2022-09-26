function getComputerChoice(){
    let choice = randomThree();
    if (choice === 1){
        return "rock";
    } else if(choice === 2){
        return "paper";
    } else{
        return "scissors";
    }
}

function randomThree(){ //Chooses one two or three randomly
    return Math.floor(Math.random()*3) + 1;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "It's a draw!"
    } else if((playerSelection === "rock" && computerSelection == "paper")
    || (playerSelection === "scissors" && computerSelection === "rock")
    || (playerSelection === "paper" && computerSelection === "scissors")){
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else{
        return `You win! ${playerSelection} beats ${computerSelection}!`
    }
}