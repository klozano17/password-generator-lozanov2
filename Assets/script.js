// Assignment code here

//generate password
function generatePassword() {
  //Prompts for user
  var length = Number(
    prompt(
      "How many characters will your password be? Enter a number between 8 and 128"
    )
  );
  //charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),

  var useLowercase = confirm("Use lowercase?");
  var useUppercase = confirm("Use uppercase?");
  var useNumeric = confirm("Use numeric?");
  var useSpecial = confirm("Use special characters?");
  console.log(
    "useLowercase",
    useLowercase,
    "useUppercase",
    useUppercase,
    "useNumeric",
    useNumeric,
    "useSpecial",
    useSpecial
  );

  console.log("generate");
  //evaluate character type
  var charSet = "";
  var charType = "lowercase";
  var charTypeLower = charType.toLowerCase();
  var useLowercaseString = "abcdefghijklmnopqrstuvwxyz";
  var useNumericString = "0123456789";
  var useUppercaseString = "abcdefghijklmnopqrstuvwxyz";
  var useSpecialString = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  //if (charType === "lowercase") {
  //console.log("lowercase")
  //charSet = "abcdefghijklmnopqrstuvwxyz";

  if (useSpecial && useLowercase && useUppercase && useNumeric) {
    charSet = useSpecialString.concat(
      useNumericString,
      useLowercaseString,
      useUppercaseString
    );
    console.log(charSet);
  
  } else if (useSpecial && !useLowercase && !useUppercase && !useNumeric) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  } else if (!useSpecial && useLowercase && !useUppercase && !useNumeric) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if (!useSpecial && !useLowercase && useUppercase && !useNumeric) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (!useSpecial && !useLowercase && !useUppercase && useNumeric) {
    charSet = "0123456789";
  }

  console.log(charSet);
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log("retval", retVal);
  return retVal;
}
//alert(generatePassword())
//make password appear in display box
//document.getElementById("password").value = password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("password", password);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
