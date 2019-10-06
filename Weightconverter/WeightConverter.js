




const convert = () => {
    let pconvert = document.getElementById("pconvert");
    pconvert.onclick = pconvert();

    let gconvert = document.getElementById("gconvert");
    gconvert.onclick = gconvert();

    let kconvert = document.getElementById("kconvert");
    kconvert.onclick = kconvert();
}



const pconvert = () => {
let userInput = document.getElementById("userInput").value;

let kilograms = userInput / 2.2046;
let grams = userInput * 453.59237;    
let ounces = userInput * 16;
let tons = userInput * 0.0005;
let newTons = userInput * 4.4482216153;
let pounds = userInput;
  
let gramsBox = document.getElementById("gresult");
gramsBox.value = grams;

let kilogramsBox = document.getElementById("kresult");
kilogramsBox.value = kilograms;

let pBox = document.getElementById("presult");
pBox.value = pounds;

let tBox = document.getElementById("tresult");
tBox.value = tons;

let ntBox = document.getElementById("ntresult");
ntBox.value = newTons;
}

const gconvert = () => {
    let userInput = document.getElementById("userInput").value;

    let pounds = userInput / 453.59237;
    let kilograms = userInput / 1000;
    let tons = userInput / 1000000;
    let newTons = "Invalid";
    let grams = userInput;
    
    
  let gramsBox = document.getElementById("gresult");
  gramsBox.value = grams;
  
  let kilogramsBox = document.getElementById("kresult");
  kilogramsBox.value = kilograms;
  
  let pBox = document.getElementById("presult");
  pBox.value = pounds;
  
  let tBox = document.getElementById("tresult");
  tBox.value = tons;
  
  let ntBox = document.getElementById("ntresult");
  ntBox.value = newTons;
  }
  

  const kconvert = () => {
    let userInput = document.getElementById("userInput").value;

    let pounds = userInput / 0.45359237;
    let grams = userInput * 1000;
    let tons = userInput *  1000;
    let newTons = userInput * 9.807;
    let kilograms = userInput;

        
  let gramsBox = document.getElementById("gresult");
  gramsBox.value = grams;
  
  let kilogramsBox = document.getElementById("kresult");
  kilogramsBox.value = kilograms;
  
  let pBox = document.getElementById("presult");
  pBox.value = pounds;
  
  let tBox = document.getElementById("tresult");
  tBox.value = tons;
  
  let ntBox = document.getElementById("ntresult");
  ntBox.value = newTons;
  }
