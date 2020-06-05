// Assignment code here



function generatePassword() {
  var passwordLength = 0
  
  //ask user for password length
         //if # is not 8-128 will continue to prompt
      while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("How long do you want the length of the password? Enter a number 8 - 128 to continue"));
      }

      console.log(passwordLength); 
      window.alert("Valid Character Length");
          
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercaser = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numbers?");
  var specialcharacters = confirm("Would you like to include special characters?");
  
  
  }

  
    




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
