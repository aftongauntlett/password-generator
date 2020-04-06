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

  // Moved all variables top of file:

  // created lengthAsk and set it to true. The computer will prompt an error if it becomes false. It only becomes false if it has to run the loop again, meaning user entered the incorrect length.
  var lengthAsk = true
  // set charset to an empty string
  var charset = "";
  // set password to an empty string
  var password = "";

  // created while loop to make sure the password meets all criteria 

  do {

    if (lengthAsk) {
      var length = prompt("How long would you like your password to be? (Must be between 8-128 characters.)");
      lengthAsk = false

    } else {
      var length = prompt("Invalid - Please try again! Must be between 8-128 characters.")

    }

    length = parseInt(length)

  }
  // length less than 9 OR length greated than 128 - cannot fix bug where user hits cancel :( 
  while (length < 8 || length > 128)

  // created the prompts (true or false) for each option - yes includes the character choices, cancel (or no) does not include the choice.
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
    charset += "!@#$%^&*()_+ ~`|}{[]\:;?><,./-="
  }

  // created a for statement for the computer to cycle through everything and generate the password combinations.
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;

}


