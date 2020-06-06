// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@', '%', '+','\\','/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


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
          
  var hasLowercase = confirm("Would you like to include lowercase letters?");
  var hasUppercase = confirm("Would you like to include uppercase letters?");
  var hasNumeric = confirm("Would you like to include numbers?");
  var hasSpecialcharacters = confirm("Would you like to include special characters?");

  var password = generatePassword();
  if (hasLowercase) {

  }

  if (hasUppercase) {

  }

  if (hasNumeric) {

  }

  if (hasSpecialcharacters) {

  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
