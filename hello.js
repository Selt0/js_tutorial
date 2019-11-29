console.log("Hello, world!", "how's it going?", "I'm doing great!");

//string concatenation
"hello " + "world"

let firstName = "Michael";
let lastName = "Biggs";

firstName + " " + lastName;

//interpolation
`${firstName} ${lastName}`;

let city = 'Bemidji';
let state = 'MN';

`${city}, ${state}`;

console.log(city, state);
//Bemidji  MN

let animal = 'hoNeY BaDGer';

animal.toLowerCase().includes('badger');

let soliloquy = 'To be, or not to be, that is the question:'

for (let i = 0; i < soliloquy.length; i++) {
  // console.log(soliloquy.charAt(i));
  console.log(soliloquy[i]);
}

//one powerful technique is to write a test for the functionality we want, then get it passing any way we can, and then refactor the code to use a more elegant method. The second step in this process (called test-driven development, or TDD) often involves writing inelegant but easy-to-understand code—