let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password ="";
let passwordOneEL= document.querySelector(".password-one-el");
let passwordTwoEL= document.querySelector(".password-two-el");
let numberEL = document.querySelector(".number-checkbox");
let characterEL = document.querySelector(".character-checkbox");
let length1 = characters.length;
let modifiedArray = [];


function generatePasswordHelper(characterArray,passwordLength)
{
    password ="";
    for(let i = 0;i<passwordLength.value;i++)
    {
        let randonNumber = Math.floor(Math.random() * characterArray.length);
        password += characterArray[randonNumber];

    }

    return password;
}

function generatePassword()
{
    
    let passwordLength = document.querySelector(".password-txt");
    var regex=/^[0-9]+$/;
    if(passwordLength.value.match(regex) && passwordLength.value <= 20)
    {
        if(characterEL.checked && !numberEL.checked)
        {
            modifiedArray = characters.slice(0,62);
        }
        else if(!characterEL.checked && numberEL.checked)
        {
            let newarr = characters.slice(0, 52);
            let newarr1 = characters.slice(62,characters.length);
            let newCharcaterArr = newarr.concat(newarr1);
            modifiedArray = newCharcaterArr;   
        }
        else if(characterEL.checked && numberEL.checked)
        {
            modifiedArray = characters.slice(0,52);;   
        }
        else
        {
            modifiedArray = characters
        }
    
        passwordOneEL.textContent = generatePasswordHelper(modifiedArray,passwordLength);
        passwordTwoEL.textContent = generatePasswordHelper(modifiedArray,passwordLength);
    }
    else if( passwordLength.value > 20)
    {
        alert("Password Length cannot be more than 20");
    }
    else{
        alert("Password Length cannot be empty");
    }

}

function copyPasswordOne(){
    let content = document.querySelector(".password-one-el").textContent;
    console.log(content);
    navigator.clipboard.writeText(content);
}

function copyPasswordTwo(){
    let content = document.querySelector(".password-two-el").textContent;
    console.log(content);
    navigator.clipboard.writeText(content);
}