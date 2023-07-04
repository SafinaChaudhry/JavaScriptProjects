/**Getting all the HTML Elemnets from DOM */
const lengthValue = document.getElementById("length-value-lb");
const convertedFeet = document.getElementById("converted-feet-lb");
const feetValue = document.getElementById("feet-value-lb");
const convertedMeter = document.getElementById("converted-meter-lb");

const literValue = document.getElementById("liter-value-lb");
const convertedGallon = document.getElementById("converted-gallon-lb");
const gallonValue = document.getElementById("gallon-value-lb");
const convertedLiter = document.getElementById("converted-liter-lb");

const kiloValue = document.getElementById("kilo-value-lb");
const convertedPounds = document.getElementById("converted-pounds-lb");
const poundsValue = document.getElementById("pounds-value-lb");
const convertedKilo = document.getElementById("converted-kilo-lb");

const inputValue= document.getElementById("data-input");
const convertBtn = document.getElementById("convert-btn");

let data= 0;


/**Adding click Event Listener to convert button */
convertBtn.addEventListener("click", function(){
   
    data = inputValue.value; 
    lengthValue.textContent = data;
    convertedFeet.textContent = convertMeterToFeet();
    feetValue.textContent = data;
    convertedMeter.textContent = convertFeetToMeter();

    literValue.textContent = data;
    convertedGallon.textContent = convertLiterToGallon();
    gallonValue.textContent = data;
    convertedLiter.textContent = convertGallonsToLiters();

    kiloValue.textContent = data;
    convertedPounds.textContent = convertKiloToPounds();
    poundsValue.textContent = data;
    convertedKilo.textContent = convertPoundsToKilo();

})


/**All function for unit conversions */
function convertMeterToFeet(){
    return (data * 3.281).toFixed(3);

}

function convertFeetToMeter(){
    return (data / 3.281).toFixed(3);

}

function convertLiterToGallon(){
    return (data / 3.785).toFixed(3);

}

function convertGallonsToLiters(){
    return (data * 3.785).toFixed(3);

}

function convertKiloToPounds(){
    return (data * 2.205).toFixed(3);

}

function convertPoundsToKilo(){
    return (data / 2.205).toFixed(3);

}