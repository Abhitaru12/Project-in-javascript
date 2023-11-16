const userDice = document.getElementById('user-dice-container');
const compDice = document.getElementById('computer-dice-container');
const button = document.getElementById('button');
const resultPara = document.getElementById('result-paragraph');

function rollDice(){
    let rolledDice = Math.round(Math.random()* 5)+ 1;
    return rolledDice;
}

button.onclick = () =>{
    let userDiceNumber = rollDice();
    let compDiceNumber = rollDice();

    userDice.innerHTML = userDiceNumber;
    compDice.innerHTML = compDiceNumber;

    if (userDiceNumber > compDiceNumber) {
        resultPara.innerHTML = 'user has Won!'
    }else if(userDiceNumber < compDiceNumber){
        resultPara.innerHTML = 'Computer has won!'
    }else{
        resultPara.innerHTML = 'It was a Draw!'
    }
}