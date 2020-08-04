// These variables represent the character sets that the password will be randomly pulled from and which the user will select.
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = [
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
  "-",
  "_",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "?",
  "<",
  ">",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "How many characters do you want your password to have?"
  );
  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Your password will be " + passwordLength + " characters long.");
  } else {
    return alert("Invalid response. Please enter a number.");
  }
  var userLower = confirm(
    "Do you want your password to have lowercase letters?"
  );
  var userUpper = confirm(
    "Do you want your password to have uppercase letters?"
  );
  var userNum = confirm("Do you want your password to have numbers?");
  var userSpecial = confirm(
    "Do you want your password to have special characters?"
  );
  var collection = [];
  if (userLower === true) {
    collection = collection.concat(lower);
  }
  if (userUpper === true) {
    collection = collection.concat(upper);
  }
  if (userNum === true) {
    collection = collection.concat(num);
  }
  if (userSpecial === true) {
    collection = collection.concat(special);
  }
  // you can create a function named generatePassword that creates the password
  function generatePassword(passwordLength, collection) {
    var passwordText = "";
    for (var i = 0; i < passwordLength; i++) {
      passwordText += collection[Math.floor(Math.random() * collection.length)];
    }
    return passwordText;
  }

  var passwordTextField = document.querySelector("#password");

  passwordTextField.value = generatePassword(passwordLength, collection);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
