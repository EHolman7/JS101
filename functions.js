console.log("in functions.js");

console.log(cutUpInput);
var outputNumber = cutUpInput(5);
console.log(outputNumber);

// Example of 'Sinlge Responsibility Principle'

function nuggetFactory (animalInput) {
	// chickens are cut up
	cutUpInput(animalInput);
	// chickens are seperated into chunks
	// take chunks anf fry them
	// package the nuggets
}


function cutUpInput (input) {
	var output = input * 20;
	return output;
}

// Function Declarations

var summation;
var constant = 40;

function doesAddition (numberOne, numberTwo) {
	summation = numberOne + numberTwo + constant;
	//var summation = numberOne + numberTwo + constant;
	//return sum;

// 	function doesMoreMath(){
// 		var value = 42;
// 	}
// doesMoreMath();

// console.log(value); // this will give you a Refernce error

}

//console.log(doesAddition(2, 3));

doesAddition(2, 3);
console.log(summation);

// Function Expression

var additionAction = function (first, second) {
	return first + second;
}

console.log(additionAction(4, 9));










