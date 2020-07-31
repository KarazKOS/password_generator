// These variables represent the character sets that the password will be randomly pulled from and which the user will select.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specList = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  ":",
  ";",
  "_",
  "-",
];

// ??
var generateBtn = document.querySelector("#generate");

// Function that will pull the inputs from the prompt and confirms to generate the random characters.
function createPassword() {
  // Prompts and confirms that will be displayed to ask the choice of characters desired in password
  var charLength = prompt(
    "Please select a password length between 8 and 128 characters"
  );

  charLength = parseInt(charLength);
  if (charLength >= 8 && charLength <= 128) {
    alert("Your password will be " + charLength + " long.");
  } else {
    return "Please choose between 8 and 128 characters";
  }

  var userLower = confirm(
    "Would you like to use lower case alpha characters in your password?"
  );
  var userUpper = confirm(
    "Would you like to use upper case alpha characters in your password?"
  );
  var userNum = confirm("Would you like to use numbers in your password?");
  var userSpec = confirm(
    "Would you like to use any special characters in your password?"
  );
  var userChoice = [];

  if (userLower === true) {
    userChoice = userChoice.concat(lowerCase);
  }

  if (userUpper === true) {
    userChoice = userChoice.concat(upperCase);
  }

  if (userNum === true) {
    userChoice = userChoice.concat(numList);
  }

  if (userSpec === true) {
    userChoice = userChoice.concat(specList);
  }

  // This variable will be the generated password, which is why it's an empty string.
  var results = "";
  for (var i = 0; i < charLength; i++) {
    console.log(userChoice);
    results += userChoice[Math.floor(Math.random() * charLength)];
  }

  return results;
}

// Write password to the #password input - I will need to have a for loop here to cycle through the sets.
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button, this button when clicked will trigger the function to write the password.
generateBtn.addEventListener("click", writePassword);

// ************* OLD CODE *****************//

// // Assignment Code
// var specialList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ":", ";", "_", "-",];
// var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0"];
// //  change var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
// var uppperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lengthPass;

// var generateBtn = document.querySelector("#generate");
// var password = "";

// // Define Functions

// function generatePassword() {
//   // Password Variable
//    source = '';
//   let passwordNew = '';
//   let availableChar = [].concat(lowerCaseList);
//   const lengthPass = prompt("How many characters do you want your password to be between 8-128 characters?");
//   const hasSpecial = confirm("Would you like your password to have special char.");
//   const hasUpper = confirm();
//   const hasNumber = confirm();

//   console.log("lengthPass = " + lengthPass);
//   if (lengthPass < 8) {
//     alert("The password is too short.");
//     return;
//   } else if (lengthPass > 128); {
//     alert("The password is too long.");
//     return;
//   } else if (isNaN(lengthPass)) {
//   alert("Entry must be a number");
//   return;
//   }
//   //
// }

// var specialChar

// // Write password to the #password input
// function writePassword() {
//   // you can create a function named generatePassword that creates the password
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// }
