function getComputerChoice(){
    let choice = randomThree();
    if (choice === 1){
        return "Rock";
    } else if(choice === 2){
        return "Paper";
    } else{
        return "Scissors";
    }
}

function randomThree(){ //Chooses one two or three randomly
    return Math.floor(Math.random()*3) + 1;
}