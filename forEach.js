//fat arrow
a.forEach(element => console.log(element));

a.forEach((element) => {
  console.log(element);
  });

let a = ["ant", "bat", "cat", 42];

a.forEach(function(element) {
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:"
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});

let b = [19, 1, 42, 100, -3];
let c = b.sort(function(a, b) { return a - b });

//Array [ -3, 1, 19, 42, 100];

//fat arrow - Basic Syntax with One Parameter
c.forEach(element => console.log(element));