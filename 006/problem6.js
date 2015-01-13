/*
	Sum square difference


	The sum of the squares of the first ten natural numbers is,

	1^2 + 2^2 + ... + 10^2 = 385
	The square of the sum of the first ten natural numbers is,

	(1 + 2 + ... + 10)^2 = 55^2 = 3025
	Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

	Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

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


function fillNaturalNumberArray(maxNumber) {
	var array = [];
	for (i = 1; i <= maxNumber; i++) {
		array.push(i);
	}
	return array;
}


function sumSquareDifference(maxNumber) {
	var numbers = fillNaturalNumberArray(maxNumber);
	
	var sumSq = sumOfSquares(numbers);
	var sqSum = squareOfSum(numbers);
	var resultString = "Sum of squares of " + maxNumber + " natural numbers is " + sumSq
	resultString += "\nSquare of sum is " + sqSum;
	resultString += "\nDifference is " + Math.abs(sumSq - sqSum);
	return resultString;
}

console.log(sumSquareDifference(100));