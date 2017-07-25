console.log("I'm in second.js");

var perry = "penguin";
var nelly = "owl";

console.log("Perry is a " + perry + ".");


var quote = "when you don’t create things, you become defined by your tastes rather than ability. your tastes only narrow and exclude people. so create. things.";

var numberOfCharacters = quote.length;
console.log("length of quote", numberOfCharacters);

// Built in Methods
// .indexOF()
// .charAt()
// .replace()

// First Quote
console.log(quote.indexOf("things")); // will gice the index of the beginning of the string (first encounter)
console.log(quote.charAt(50)); // will give the character at the specified index

console.log(quote.replace(/things/g, "robots"));
document.getElementById("quote").innerHTML = quote;

// Second Quote
var element = document.getElementById("secondQuote"); // reading from HTML
var jsString = element.innerHTML;
console.log(jsString);





