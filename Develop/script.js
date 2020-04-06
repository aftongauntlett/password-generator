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

  // created while loop to make sure the password is the correct length

  do {
    var length = prompt("How long would you like your password to be? (Must be between 8-128 chararcters.)");
    length = parseInt(length)

  }
  while (length < 8 || length > 128)

  //  set charset to empty string
  var charset = "";

  // created the prompt for length of password
  if (confirm("Would you like to include an uppercase letter?")) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (confirm("Would you like to include a lowercase letter?")) {
    charset += "abcdefghijklmnopqrstuvwxyz"
  }

  if (confirm("Would you like to include a number?")) {
    charset += "0123456789"
  }

  if (confirm("Would you like to include a special character?")) {
    charset += "!@#$%^&* ()_ + ~`|}{[]\:;?><,./-="
  }


  // set var password to empty string
  var password = "";


  // created a for statement for the computer to cycle through everything and generate the password combinations.
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }


  return password;

}


