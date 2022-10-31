function generatePassword() {


// A loop to make sure the user inputs the right amount of characters.
  while (true) {
    var passCharacters = window.prompt('How many characters would you like? In between 8 and 128, please');
    if (passCharacters > 7 && passCharacters < 129) {
      console.log(passCharacters);
      break;} 
      else {var passCharacters = window.prompt('Try again. How many characters would you like? In between 8 and 128, please');}
  } 



 // Strings of possible characters. They get added following the permission of the user.
  var characters = "";
  let lowercase = "abcdefghijklmnopqrstuvwxyz"; 
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  let numbers = "0123456789"; 
  let special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; 


// The window prompts + and combining the character pool.
  var passLowercase = window.prompt('Would you like to include lowercase characters? (Please type Y or N)');
  console.log(passLowercase);

    if (passLowercase.includes(("y")) || passLowercase.includes(("Y"))) {
      var characters = characters.concat(lowercase);
  }


  var passUppercase = window.prompt('Would you like to include uppercase characters? (Y/N)');
  console.log(passUppercase);

    if (passUppercase.includes(("y")) || passUppercase.includes(("Y"))) {
      var characters = characters.concat(uppercase);
  } 
  

  var passNumbers = window.prompt('Would you like to include numbers? (Y/N)');
  console.log(passNumbers);

     if (passNumbers.includes(("y")) || passNumbers.includes(("Y"))) {
      var characters =  characters.concat(numbers);
  } 
  
   
  var passSpecial = window.prompt('Would you like to include special characters? (Y/N)');
  console.log(passSpecial);
 
    if (passSpecial.includes(("y")) || passSpecial.includes(("Y"))) {
      var characters =  characters.concat(special);
  } 

// To confirm the pool of characters
  console.log(characters);


// Using the math.floor and math.random, as well as the user's amount of characters and the character pool we've created to generate a password.
  let password = "";
  for (let i = 0; i < passCharacters; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * passCharacters)
    );
  }
  return password;



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

generateBtn.addEventListener("click", function() {
writePassword();

}); 
