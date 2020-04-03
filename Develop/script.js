// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// created function to generate password
function generatePassword() {

  // created the prompt for length of password
  var length = prompt("How long would you like your password, must be at least 8 characters.");

  // created the prompt for length of password
  var charset = prompt("Please choose: lowercase, uppercase, numeric, and/or special characters");




  // make it validate that at least one of those characters is present





  // created an if statement to make sure the password is at least 8 characters long






  // created charset to include all possible characters for the generated password. Included toUpperCase.
  var charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&* ()_ + ~`|}{[]\:;?><,./-=0123456789".toUpperCase() + "abcdefghijklmnopqrstuvwxyz";

  // set var password to ""
  var password = "";


  // created a for statement for the computer to cycle through everything and generate the password combinations.
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  // create if statements


  return password;

}


