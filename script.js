// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const specialCharacters = ['@', '%', '+','\\','/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowerPasswordSet = [];
let upperPasswordSet = [];
let numericPasswordSet = [];
let specialPasswordSet = [];


// Write password to the #password input
function writePassword() {
  var passwordLength = 0

  
  //ask user for password length
         //if # is not 8-128 will continue to prompt
      while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("How long do you want the length of the password? Enter a number 8 - 128 to continue"));
      }

      console.log(passwordLength); 
      window.alert("Valid Character Length");
          
  var hasLowerCase = confirm("Would you like to include lowercase letters?");
  var hasUpperCase = confirm("Would you like to include uppercase letters?");
  var hasNumeric = confirm("Would you like to include numbers?");
  var hasSpecialCharacters = confirm("Would you like to include special characters?");

  //var password = generatePassword() 
  if (hasLowerCase) {
      while(lowerPasswordSet.length < parseInt(passwordLength) / 4) {
        const randomIndex = Math.floor(Math.random() * lowerCasedCharacters.length)
        console.log(randomIndex);
        const character = lowerCasedCharacters[randomIndex];
        lowerPasswordSet.push(character);     
      }
      console.log(lowerPasswordSet)
      
    }

  if (hasUpperCase) {
      while(upperPasswordSet.length < parseInt(passwordLength) / 4) {
        const randomIndex = Math.floor(Math.random() * upperCasedCharacters.length)
        console.log(randomIndex);
        const character = upperCasedCharacters[randomIndex];
        upperPasswordSet.push(character);
      }
      console.log(upperPasswordSet)
   
    }

  if (hasNumeric) {
      while(numericPasswordSet.length < parseInt(passwordLength) / 4) {
        const randomIndex = Math.floor(Math.random() * numericCharacters.length)
        console.log(randomIndex);
        const character = numericCharacters[randomIndex];
        numericPasswordSet.push(character);
      }
      console.log(numericPasswordSet)
      
    }

  if (hasSpecialCharacters) {
      while(specialPasswordSet.length < parseInt(passwordLength) / 4) {
        const randomIndex = Math.floor(Math.random() * specialCharacters.length)
        console.log(randomIndex);
        const character = specialCharacters[randomIndex];
        specialPasswordSet.push(character);
      }
      console.log(specialPasswordSet)
    }

  else {
    
  }

  //merge sets for each criteria
  const mergedSets =[...lowerPasswordSet,...upperPasswordSet,...numericPasswordSet,...specialPasswordSet];
 
  console.log(mergedSets);

  var passwordText = document.querySelector("#password");

  passwordText.value = mergedSets.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
