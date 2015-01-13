// Sum square difference
function solveProblem6() {
	/*
	The sum of the squares of the first ten natural numbers is,

	1^2 + 2^2 + ... + 10^2 = 385
	The square of the sum of the first ten natural numbers is,

	(1 + 2 + ... + 10)^2 = 55^2 = 3025
	Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

	Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
	*/
	
	
	var MAX_NUMBER = 100;
	var numbers = fillNaturalNumberArray(MAX_NUMBER);
	
	var sumSq = sumOfSquares(numbers);
	var sqSum = squareOfSum(numbers);
	var resultString = "Sum of squares of " + MAX_NUMBER + " natural numbers is " + sumSq
	resultString += "<br/>Square of sum is " + sqSum;
	resultString += "<br/>Difference is " + Math.abs(sumSq - sqSum);
	document.getElementById("answer").innerHTML = resultString;  
	
}

function sumOfSquares(array) {
	var sum = 0;
	
	for (i = 0; i < array.length; i++) {
		sum += Math.pow(array[i], 2);
	}
	return sum;
}

function squareOfSum(array) {
	var sum = 0;
	
	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return Math.pow(sum, 2);
}