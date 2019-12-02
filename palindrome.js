//reverse a string
function reverse(string) {
  //simple reverse string
  //return string.split("").reverse().join("");

  //to include emojis or other crazy characters
  return Array.from(string).reverse().join("");
}

//function to detect palindrome, not case sensitive
function palindrome(string) {
  let original = string.toLowerCase();
  return original === reverse(original);
}

//separates user email and domain
function emailParts(string) {
  //create an array including the characters
 let email = Array.from(string);
  //loop through array until '@' is found.
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      //slice starting from '@' location.
     let domain =  email.slice(i + 1).join("");
     let username = email.slice(0, i).join("");
     console.log(`Your user name is ${username}. The domain for the email address is ${domain}.`)
    }
  }
  //print out  username and domain.
  return string.toLowerCase().split("@");
}
