//document.getElementById("count-el").innerText = 5;
let count =0;
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

function counter(){
    count += 1;
    countEL.textContent = count;
}

function save(){
    let countStr = count + " - ";
    saveEL.textContent += countStr;
    count = 0;
    countEL.textContent = 0;
    
}