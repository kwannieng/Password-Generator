// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordArray = specialCharacters.concat(numericCharacters, lowerCasedCharacters,upperCasedCharacters);
console.log (passwordArray)


let passwordLength = 0;
let needSpecialCharacters = true;
let needNumbers = true;
let needUppercase = true;
let needLowercase = true;
let result =[];


// Function to prompt user for password options
function getPasswordOptions() {
  
  passwordLength = prompt("How many characters you would like your password to have?");

  if (passwordLength < 6){
    alert ("Password should contain at least 6 characters.");
    return 
  }

  if (passwordLength > 30){
    alert ("Password should not contain more that 30 characters.");
    return 
  }

  if (isNaN(passwordLength)){
    alert ("Please enter a number.");
    return 
  }

  needSpecialCharacters = confirm ("Click OK to confirm you want to have Special Characters in your password.");

  needNumbers = confirm ("Click OK to confirm you want to have Numbers in your password.");

  needUppercase = confirm ("Click OK to confirm you want to have Uppercase Characters in your password.")
  
  needLowercase = confirm ("Click OK to confirm you want to have Lowercase Characters in your password.")

  if (needSpecialCharacters == true && needNumbers == true && needUppercase == true && needLowercase == true){

    passwordArray = passwordArray;
    
  } else if (needSpecialCharacters !== true && needNumbers == true  && needUppercase == true && needLowercase == true) {

    passwordArray = numericCharacters.concat(lowerCasedCharacters,upperCasedCharacters);

  } else if (needSpecialCharacters == true && needNumbers !== true  && needUppercase == true && needLowercase == true) {

    passwordArray = specialCharacters.concat(lowerCasedCharacters,upperCasedCharacters);

  } else if (needSpecialCharacters == true && needNumbers == true && needUppercase !== true && needLowercase == true) {

    passwordArray = specialCharacters.concat(numericCharacters, lowerCasedCharacters);

  } else if (needSpecialCharacters == true && needNumbers == true && needUppercase == true && needLowercase !== true) {

    passwordArray = specialCharacters.concat(numericCharacters, upperCasedCharacters);

  } else if (needSpecialCharacters !== true && needNumbers !== true && needUppercase == true && needLowercase == true) {

    passwordArray = lowerCasedCharacters.concat(upperCasedCharacters)

  } else if (needSpecialCharacters !== true && needNumbers == true && needUppercase !== true && needLowercase == true) {

    passwordArray = numericCharacters.concat(lowerCasedCharacters);

  } else if (needSpecialCharacters !== true && needNumbers == true && needUppercase == true && needLowercase !== true) {

    passwordArray = numericCharacters.concat(upperCasedCharacters);

  } else if (needSpecialCharacters !== true && needNumbers !== true && needUppercase !== true && needLowercase == true) {

    passwordArray = lowerCasedCharacters;

  } else if (needSpecialCharacters !== true && needNumbers !== true && needUppercase == true && needLowercase !== true) {

    passwordArray = upperCasedCharacters;

  } else if (needSpecialCharacters !== true && needNumbers == true && needUppercase !== true && needLowercase !== true) {

    passwordArray = numericCharacters;

  } else if (needSpecialCharacters == true && needNumbers !== true && needUppercase !== true && needLowercase !== true) {

    passwordArray = specialCharacters;

  } else if (needSpecialCharacters == true && needNumbers == true && needUppercase !== true && needLowercase !== true) {

    passwordArray = specialCharacters.concat(numericCharacters);

  } else if (needSpecialCharacters == true && needNumbers !== true && needUppercase == true && needLowercase !== true) {

    passwordArray = specialCharacters.concat(upperCasedCharacters);

  } else if (needSpecialCharacters == true && needNumbers !== true && needUppercase !== true && needLowercase == true) {

    passwordArray = specialCharacters.concat(lowerCasedCharacters);

  } else ( alert("Plaese at least select one type of character for your password."))

}

getPasswordOptions()

console.log(`passwordLength: ${passwordLength}`)
console.log(`needSpecialCharacters: ${needSpecialCharacters}`)
console.log(`needNumbers: ${needNumbers}`)
console.log(`needUppercase: ${needUppercase}`)
console.log(`needLowercase: ${needLowercase}`)
console.log(`passwordArray: ${passwordArray}`)


// Function for getting a random element from an array

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}


// Function to generate password with user input
function generatePassword() {
 

for (index=0; index<passwordLength; index++){
  var calculation = getRandom(passwordArray);
  result.push(calculation);
}


return result.join ("");
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);