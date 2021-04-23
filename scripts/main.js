function toggleSelection(element) {
    //check to see if another item was selected
    if (document.querySelectorAll('.selected').length !== 0) {
        document.querySelector('.selected').classList.toggle('selected'); //if there was another one, deselect it
    }
    element.classList.toggle('selected'); //toggle the clicked element

    switch (element.id) {
        case 'scissors-selector':
            userSelection = 'scissors';
            break;
        case 'paper-selector':
            userSelection = 'paper';
            break;
        case 'rock-selector':
            userSelection = 'rock';
            break;
    }
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']; // define choices 
    const randomNum = Math.floor(Math.random() * choices.length);//Pick a random number corresponding to list length
    computerSelection = choices[randomNum]; //pick the item in the list that has index position selected in previous step
}

function checkWinner(){
    console.log(userSelection);
    let winner;
    if (userSelection === 'rock') {
        switch(computerSelection) {
            case ('rock'):
                winner = 'tie';
                break;
            case ('paper'):
                winner = 'computer';
                break;
            case ('scissors'):
                winner = 'user';
                break;
        }
    } else if (userSelection === 'scissors') {
        switch(computerSelection) {
            case ('rock'):
                winner = 'computer';
                break;
            case ('paper'):
                winner = 'user';
                break;
            case ('scissors'):
                winner = 'tie';
                break;
        }
    } else if (userSelection === 'paper') {
        switch(computerSelection) {
            case ('rock'):
                winner = 'user';
                break;
            case ('paper'):
                winner = 'tie';
                break;
            case ('scissors'):
                winner = 'computer';
                break;
        }
    }
    return winner;
}

function updateParam(winner) {
    const winMessage = `You win! ${userSelection} beats ${computerSelection}.`;
    const loseMessage = `You lose! ${computerSelection} beats ${userSelection}.`;
    const tieMessage = `It's a tie! You both choosed ${userSelection}`;
    switch(winner) {
        case 'tie':
            messageBox.textContent = tieMessage;
            break;
        case 'user':
            messageBox.textContent = winMessage;
            playerScore += 1;
            userScorePanel.textContent = playerScore;
            break;
        case 'computer':
            messageBox.textContent = loseMessage;
            computerScore += 1;
            computerScorePannel.textContent = computerScore;
            break;
    }
    round += 1;
    (round < 6) ?
    roundPannel.textContent = `${round}/5` :
    roundPannel.textContent = `5/5`;
    document.querySelector('.selected').classList.toggle('selected');

}

function displayFinalMessage() {
    let endMessage = document.querySelector('.end-message');
    if (playerScore === computerScore) {
        endMessage.textContent = `game over, its a tie!`;
    } else if (playerScore < computerScore) {
        endMessage.textContent = 'game over, you lose!';
    } else if (computerScore < playerScore) {
        endMessage.textContent = 'game over, you win!';
    }
}

function resetGame () {
    //reset all game data
    round = 1;
    roundPannel.textContent = `${round}/5`;
    playerScore = 0;
    userScorePanel.textContent = `${playerScore}`;
    computerScore = 0;
    computerScorePannel.textContent = `${computerScore}`;
    userSelection = '';
    computerSelection = '';

    //replace the button
    button.classList.toggle('hidden');

    //rehide the end of game message
    endGameMessage.classList.toggle('hidden');

    
}
function startGame() {
    if (userSelection !== '') { //check the user made a selection
        computerPlay();  //pick for the computer
        let winner = checkWinner(); //check who won
        updateParam(winner); //update score board, message, and round
        if (round === 6) { //if final round
            displayFinalMessage();
            endGameMessage.classList.toggle('hidden');
            button.classList.toggle('hidden');
        }
    }
}

//set up global DOM variables
const userScorePanel = document.querySelector('#userScorePannel');
const roundPannel = document.querySelector('#roundPannel');
const computerScorePannel = document.querySelector('#computerScorePannel');
const messageBox = document.querySelector('.message-box-message');
const button = document.querySelector('button');
const selectors = document.querySelectorAll('.item-selector');
const endGameMessage = document.querySelector('.end-game-message');
const endGameButton = document.querySelector('#replay-button');

// set up the global playing variables
let round = 1;
let playerScore = 0;
let computerScore = 0;
let userSelection = '';
let computerSelection = '';

//Add event listeners on all the three item selectors
selectors.forEach(element => element.addEventListener('click', () => {
    toggleSelection(element);
}));

//Add an event listener on the submit button
button.addEventListener('click', startGame)

//Add an event listener on the end of game replay button
endGameButton.addEventListener('click', resetGame);