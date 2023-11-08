const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let noSymbolsValue = characters.indexOf("~");

let noNumbersValue = characters.indexOf("0");

let noNumbersArr= characters.slice(0, noNumbersValue).concat(characters.slice(noSymbolsValue, characters.length));

let passwordLenght=document.getElementById("range-el").value;
const passwordBtn = document.getElementById("password-btn")
const passwordValue1=document.getElementById("password-1")
const passwordValue2=document.getElementById("password-2")
const rangeInput = document.getElementById("range-el");

rangeInput.addEventListener('input',function(){
    passwordLenght=rangeInput.value;
})

passwordBtn.addEventListener('click',function(){

    let checkboxSymbols = document.getElementById("checkbox-symbols").checked;

    let checkboxNumbers = document.getElementById("checkbox-numbers").checked;

    passwordValue1.textContent="";
    let firstPassword=generatePassword(passwordLenght,checkboxNumbers,checkboxSymbols);
    for(let i=0; i<firstPassword.length; i++){
        passwordValue1.textContent += firstPassword[i];
    }

    passwordValue2.textContent="";
    let secondPassword=generatePassword(passwordLenght,checkboxNumbers,checkboxSymbols);
    for(let i=0; i<secondPassword.length; i++){
        passwordValue2.textContent += secondPassword[i];
    }

})

function generatePassword(passwordLenght,checkboxNumbers,checkboxSymbols){
    let password= [];

    for(let i=0; i<passwordLenght; i++){
        let random=0;
        let randomCharacter=0;
        
        if(checkboxNumbers && !checkboxSymbols){
            random=Math.floor(Math.random()*noSymbolsValue);
            randomCharacter = noNumbersArr[random]
            
        }else if(checkboxSymbols && !checkboxNumbers){
            random=Math.floor(Math.random()*noNumbersArr.length);
            randomCharacter = noNumbersArr[random]
           
        }else if(checkboxNumbers && checkboxSymbols){
            random=Math.floor(Math.random()*characters.length);
            randomCharacter = noNumbersArr[random]
           
        }else{
            random=Math.floor(Math.random()*noNumbersValue);
            randomCharacter = noNumbersArr[random]
           
        }
        password.push(randomCharacter);
    }

    return password
}

document.addEventListener('DOMContentLoaded', function() {
  var rangeEl = document.getElementById('range-el');

  rangeEl.addEventListener('input', function() {
      var lengthLabel = document.getElementById('length-label');
      lengthLabel.textContent =  rangeEl.value;
  });
});


///https://github.com/samuelsmith442/Password-Generator/blob/main/index.js

passwordValue1.addEventListener('click', copyToClipboard);
passwordValue2.addEventListener('click', copyToClipboard);

function copyToClipboard() {
  const textToCopy = this.textContent;
  if (textToCopy.length === 0) {
    return
  }

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(function() {
        alert("Successfully copied to clipboard.");
      })
      .catch(function() {
        alert("Failed to copy password");
      });
  } 
  else {
    alert("Browser not compatible")
  }
}