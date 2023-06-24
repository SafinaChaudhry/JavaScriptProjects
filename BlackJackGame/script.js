let player = {
    Name: "Safina",
    Chip: 145
}
let cards = [];
let sum =0;
let hasBlackJack = false;
let isAlive = false;
let message="";
let messageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardEL = document.getElementById("card-el");
let playerEL = document.getElementById("player-el");

playerEL.textContent = player.Name + ": $" + player.Chip

function renderGame(){
    if(sum <= 20){
        message = "Do you want to draw a new card? 🙂";
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } 
    else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    
    cardEL.textContent = "Cards: ";
    for(let i =0; i<cards.length;i++)
    {
        cardEL.textContent += cards[i] + " ";
    }
    sumEL.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}

function newCard(){

    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
    document.getElementById("start-btn").disabled =true;
}


function getRandomCard(){
    let random = Math.floor( Math.random() * 13) +1;
    console.log(random);
    if(random === 1)
        return 11;
    else if(random >= 11 )
        return 10;
    else
        return random
}


