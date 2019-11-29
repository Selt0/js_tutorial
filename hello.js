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

//Chapter 3

let char = 'honey badger'.split('');

for (let i = 0; i < char.length; i++) {
  console.log(char[i]);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.slice(2, 7);

//[3, 4, 5, 6, 7]

a.slice(-8,-3)
//[3, 4, 5, 6, 7]

let b = "ant bat cat";
b.slice(4,7)
//bat

let c = [42, 8 , 17, 99];

c.push(6);
//5     returns the new length of the array
[42, 8, 17, 99, 6];

c.pop();
//6 returns the value being deleted
[42, 8, 17, 99];

let d = ['ant', 'bat', 'cat', 42];

d.join(" ");
//"ant bat cat 42";
d.split(" ");
//["ant", "bat", "cat", "42"];

let total = "";
for (let i = 0; i < a.length; i++) {
  //set total equal to the running total plus current element
  total += a[i];
}
total;
// "antbatcat42"
a.join("");
//"antbatcat42"
total == a.join("");
//true