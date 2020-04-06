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



  // created the prompt for length of password
  var charset = prompt("Please choose: lowercase, uppercase, numeric, and/or special characters");


  // make it validate that at least one of those characters is present

  // if (charset = )
  //   alert("Valid Password!")

  // }
  // else {
  //   alert("Invalid Password!")
  // }


  // created an if statement to make sure the password is at least 8 characters long

  if (length >= 8 && length <= 128 && password.indexOf(' ') === -1) {
    alert("Valid Password!")

  }
  else {
    alert("Invalid Password!")
  }


  // created charset to include all possible characters for the generated password. Included toUpperCase.
  var charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&* ()_ + ~`|}{[]\:;?><,./-=0123456789".toUpperCase() + "abcdefghijklmnopqrstuvwxyz";

  // set var password to ""
  var password = "";


  // created a for statement for the computer to cycle through everything and generate the password combinations.
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }


  return password;

}


