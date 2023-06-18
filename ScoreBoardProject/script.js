let startingMinutes = 90;
let time = startingMinutes * 60;

let timeEL = document.getElementById("timer");
let homeEL = document.getElementById("home-score");
let guestEL = document.getElementById("guest-score");
let homeFoulEL = document.getElementById("home-foul");
let guestFoulEL = document.getElementById("guest-foul");

var interval;

function updateTime(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timeEL.textContent = minutes  + ":"  + seconds;
    time--;
    if(time < 0)
    {
        clearInterval(interval);
        alert("Game Completed");
    }
}

function AddOneHome(){
    let currNum = homeEL.innerText.match(/\d+/g);
    homeEL.textContent =  parseInt(currNum)+1;
}

function AddTwoHome(){
    let currNum = homeEL.innerText.match(/\d+/g);
    homeEL.textContent =  parseInt(currNum)+2;
}


function AddThreeHome(){
    let currNum = homeEL.innerText.match(/\d+/g);
    homeEL.textContent =  parseInt(currNum)+3;
}

function AddOneGuest(){
    let currNum = guestEL.innerText.match(/\d+/g);
    guestEL.textContent =  parseInt(currNum)+1;
}

function AddTwoGuest(){
    let currNum = guestEL.innerText.match(/\d+/g);
    guestEL.textContent =  parseInt(currNum)+2;
}


function AddThreeGuest(){
    let currNum = guestEL.innerText.match(/\d+/g);
    guestEL.textContent =  parseInt(currNum)+3;
}


function AddFoulHome(){
    let currNum = homeFoulEL.innerText.match(/\d+/g);
    homeFoulEL.textContent =  parseInt(currNum)+1;
}

function AddFoulGuest(){
    let currNum = guestFoulEL.innerText.match(/\d+/g);
    guestFoulEL.textContent =  parseInt(currNum)+1;
}

function restart(){
    startingMinutes = 90;
    time = startingMinutes * 60;
    homeEL.textContent = 0;
    guestEL.textContent = 0;
    homeFoulEL.textContent = 0;
    guestFoulEL.textContent = 0;
    timeEL.textContent =  startingMinutes  + ":"  + seconds;
    clearInterval(interval);
    
}

function startTimer(){
    
    clearInterval(interval);
    interval = setInterval(updateTime, 1000);

}
