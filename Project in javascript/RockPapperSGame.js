const playerChoice = document.getElementById('playerChoiceResult');
const computerChoice = document.getElementById('computerChoiceResult')
const resultText = document.getElementById('result-output-text');
const choiceButton = document.querySelectorAll('.choice-button');

function generateComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;

    if(randomNumber === 1){
        return 'ROCK!';
    }else if(randomNumber === 2){
        return 'PAPER!';
    }else{
        return 'SICSSORS!';
    }
}

choiceButton.forEach((button) => button.addEventListener('click', () => {
    let userChoice = button.textContent;
    let computer = generateComputerChoice()
    console.log('User Choice:',userChoice, 'Computer Choice:',computerChoice);

    playerChoice.innerHTML = userChoice;
    computerChoice.innerHTML = computer;

    if(userChoice === computer){
        resultText.innerHTML = 'DRAW!';
    }else if(userChoice === 'ROCK!'){
        computer === 'SICSSORS!' ? resultText.innerHTML='User wins!' : resultText.innerHTML = 'Computer Wins!';
    }else if(userChoice === 'PAPER!'){
        computer === 'ROCK!' ? resultText.innerHTML='User Wins!' : resultText.innerHTML = 'Computer Wins!';
    }else if(userChoice === 'SICSSORS!'){
        computer === 'PAPER!' ? resultText.innerHTML='User wins!' : resultText.innerHTML = 'Computer Wins!';
    }
}));

