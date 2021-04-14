//Function that pick a random choice from either rock, paper or scissors for the computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']; // define choices 
    const randomNum = Math.floor(Math.random() * choices.length);//Pick a random number corresponding to list length
    const finalChoice = choices[randomNum]; //pick the item in the list that has index position selected in previous step
    return(finalChoice); //return the final choice
}

//Single Round of playing
function playRound(playerSelection, computerSelection) {
    //turn the playerSelection in lowerCase
    playerSelection = playerSelection.toLowerCase();

    //define messages to display when winning, losing, or tie
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
    const tieMessage = `It's a tie! You both choosed ${playerSelection}`;

    //declare the displayMessage we will use to return the result of the game
    let displayMessage;

    //Playing scenarios
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case ('rock'):
                displayMessage = tieMessage;
                break;
            case ('paper'):
                displayMessage = loseMessage;
                break;
            case ('scissors'):
                displayMessage = winMessage;
                break;
        }
    } else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case ('rock'):
                displayMessage = loseMessage;
                break;
            case ('paper'):
                displayMessage = winMessage;
                break;
            case ('scissors'):
                displayMessage = tieMessage;
                break;
        }
    } else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case ('rock'):
                displayMessage = winMessage;
                break;
            case ('paper'):
                displayMessage = tieMessage;
                break;
            case ('scissors'):
                displayMessage = loseMessage;
                break;
        }
    }
    //return game output message
    return displayMessage;
}

//function for 5 rounds of playing
function game() {
    //initialize score
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        //Print round number to the console
        console.log(`Round ${i} of 5!`);

        //ask the player his choice to play and store it in a variable
        const playerSelection = prompt('please choose between "rock", "paper" or "scissors"');

        //get the computer to pick between rock paper or scissors
        const computerSelection = computerPlay();
        
        //call the playRound function to play the round
        let roundOutput = playRound(playerSelection, computerSelection);

        //check if player won by checking if there is win in the roundOutput
        if (!(roundOutput.indexOf('win') === -1)) {
            playerScore += 1;
            console.log(roundOutput);
            console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
        }
        //check if player lost by checking if there is lose in the roundOutput
        else if (!(roundOutput.indexOf('lose') === -1)) {
            computerScore += 1;
            console.log(roundOutput);
            console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
        }
        //check if it's a tie by checking if there is tie in the roundOutput string
        else if (!(roundOutput.indexOf('tie') === -1)) {
            console.log(roundOutput);
            console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
        }
    }
    //check who has the highest score to declare the winner
    if (playerScore < computerScore) {
        console.log('You lost the game')
    } else if (playerScore > computerScore) {
        console.log('You won the game')
    } else if (playerScore === computerScore) {
        console.log('The game is a tie.')
    }
}

game();





