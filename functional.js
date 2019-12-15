
//MAP

//map function - lets us map a function over an array of elements. alternative to looping
[1, 2, 3, 4].map(function(n) {return n * n; });
//[1, 4, 9, 16]

//fat arrow
[1, 2, 3, 4].map( (n) => {return n * n });

//function of a single argument, JavaScript allows us to omit the parentheses, curly braces, and even the return keyword
[1, 2, 3, 4].map(n => n * n);




//define a variable containing an array of strings
//define a second variable for the url-friendly array
//for each item in the first array, push a lower-case version thats bleen split on whitespace and joined on hyphens

let states = ['Kansas', "North Dakota", "South Dakota", 'Maryland', "Washington DC"];

/*
//Imperative version

function url(elements) {
  let urlStates = [];
  elements.forEach(function(element) {
    urlStates.push(element.toLowerCase().split(/\s/).join("-"));
  });
  return urlStates;
}
console.log(url(states))

//functional imperative version

function url(elements) {
  return elements.map(element => element.toLowerCase().split(/\s/).join("-"));
}
console.log(url(states))
*/


/*
//fat arrow imperative version
  let url = (elements) => {
  let urlStates = [];

  elements.forEach((element) => {
    urlStates.push(element.toLowerCase().split(/\s/).join("-"));
  });
  return urlStates;
}
console.log(url(states))

//fat arrow functional version

let url = (elements) => { return elements.map(element => element.toLowerCase().split(/\s/).join("-")); }

console.log(url(states))
*/


//better code, refining the functions


//factor the method chain that makes the strings URL-compatible into a separate function
function urlify(string) {
  return string.toLowerCase().split(/\s/).join("-");
}

//imperative version
// function imperativeUrl(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(urlify(element));
//   });
//   return urls;
// }
// console.log(url(states))

//functional version
function functionalUrl(element) {
  return element.map(element => urlify(element));
}
//Using map, write a function that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>. 

function urlSite(element) {
  let url = 'https://example.com/'
  return element.map(state => `${url}${state}`);
}

console.log(urlSite(functionalUrl(states)));
console.log(functionalUrl(states));


//FILTER

let states2 = ['Kansas', 'Nebraska', 'North Dakota', 'South Dakota'];

//singles imperative
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

console.log(imperativeSingles(states2));

//singles functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s/).length === 1);
}
console.log(functionalUrl(states2));


// Write two filter functions that return the Dakotas: one using String#includes (Section 2.5) to test for the presence of the string “Dakota” and one using a regex that tests for the length of the split array being 2. 

function includesDakota(elements) {
  //test for presence of string "dakota"
  let word = 'Dakota';
  console.log(`The word '${word}' ${elements.filter(element => element.includes(word))? 'is' : 'is not'} present`);
}

function twoWordStates(elements) {
  return elements.filter(element => element.split(/\s/).length === 2);
}
console.log(twoWordStates(states2));



//REDUCE

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum imperative
function imperativeSum(elements) {
  let total = 0;

  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

//The reduce method takes a function of two arguments, the first of which is an accumulator for the result, and the second of which is the array element itself. 

//sum functional
function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n; });
}
console.log(functionalSum(numbers));

//it’s often more helpful to think of reduce as accumulating results and storing them in its first argument 

//length imperative
function imperativeLength(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLength(states));

//length functional, the initial value of the reduce method, instead of being the default 0, is the empty object {}
function functionalLength(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLength(states));

// test-driven development (TDD), which involves writing an automated test that captures the desired behavior in code. We can then get the test to pass using any method we want, including an ugly but easy-to-understand iterative solution. At that point, we can refactor the code — changing its form but not its function — to use a more concise functional solution. As long as the test still passes, we can be confident that the code still works.

