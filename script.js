const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector("#round");
const final = document.querySelector("#game");
const finalScore = document.querySelector('#score');

let running = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let score = 0;
let count = 0;

rock.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    game(playRound("rock", computerChoice), "rock", computerChoice);
});

paper.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    game(playRound("paper", computerChoice), "paper", computerChoice);
});

scissors.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    game(playRound("scissors", computerChoice), "scissors", computerChoice);
});



//game();

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

function game(winner, playerChoice, computerChoice){
    count++;
    score += winner;
    if (winner === 0){
        results.textContent = "It's a draw!";
        draws++;
    } else if(winner === -1){
        results.textContent = `You lose! ${computerChoice} beats ${playerChoice}!`;
        console.log("loss");
        losses++;
    } else{
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
        wins++;
    }

    
    if (count === 5){
        count = 0;
        
        if(score === 0){
            final.textContent = "The game is a draw!";
        } else if(score > 0){
            final.textContent = "You win the game!";
        } else{
            final.textContent = "You lose the game";
        }
    
        finalScore.textContent = `You won ${wins} games, lost ${losses} games, and drew ${draws} games.`
        score = wins = losses = draws = 0;
    } else{
        final.textContent = '';
    }
}


