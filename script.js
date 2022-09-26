game();

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


    //winner: 0 = draw, 1 = player, -1 = computer
    if (playerSelection === computerSelection){
        return 0;
    } else if((playerSelection === "rock" && computerSelection == "paper")
    || (playerSelection === "scissors" && computerSelection === "rock")
    || (playerSelection === "paper" && computerSelection === "scissors")){
        return -1;
    } else{
        return 1;
    }
}

function game(){
    let score = 0;
    let wins = 0;
    let losses = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Choose \"Rock\", \"Paper\", or \"Scissors\".");

        let computerChoice = getComputerChoice();
        let winner = playRound(playerChoice, computerChoice);
        score += winner;

        if (winner === 0){
            console.log("It's a draw!");
            draws++;
        } else if(winner === -1){
            console.log(`You lose! ${computerChoice} beats ${playerChoice}!`);
            losses++;
        } else{
            console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
            wins++;
        }
    }

    if(score === 0){
        console.log("The game is a draw!");
    } else if(score > 0){
        console.log("You win the game!");
    } else{
        console.log("You lose the game");
    }

    console.log(`You won ${wins} games, lost ${losses} games, and drew ${draws} games.`)
}