// Smallest multiple
function solveProblem5() {

	/*
	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
	*/
	
	

	var MAX_DIVISOR = 20;
	var divisors = fillNaturalNumberArray(MAX_DIVISOR);
	
	var start = new Date().getTime();
	var smallestMultiple = findSmallestMultiple2(divisors);
	var time = new Date().getTime() - start;
	document.getElementById("answer").innerHTML = "Smallest multiple of [" + divisors + "] is " + smallestMultiple + "<br>findSmallestMultiple2() execution time: " + time + "<br>";
	
	
	var start = new Date().getTime();
	var smallestMultiple = findSmallestMultiple3(divisors);
	var time = new Date().getTime() - start;
	document.getElementById("answer").innerHTML += "Smallest multiple of [" + divisors + "] is " + smallestMultiple + "<br>findSmallestMultiple3() execution time: " + time + "<br>";

	var start = new Date().getTime();
	var smallestMultiple = findSmallestMultiple4(divisors);
	var time = new Date().getTime() - start;
	document.getElementById("answer").innerHTML += "Smallest multiple of [" + divisors + "] is " + smallestMultiple + "<br>findSmallestMultiple4() execution time: " + time + "<br>";	
}

function fillNaturalNumberArray(maxNumber) {
	var array = [];
	for (i = 1; i <= maxNumber; i++) {
		array.push(i);
	}
	return array;
}

function findSmallestMultiple(divisors) {
	var smallestMultipleFound = false;
	var currentNumber = 0;
	
	while (!smallestMultipleFound) {
		currentNumber++;
		smallestMultipleFound = true;

		for (index = 0; index < divisors.length; index++) {
			if (currentNumber % divisors[index] != 0) {
				smallestMultipleFound = false;
				break;
			}
		}
	}
	
	return currentNumber;
}

// Optimization: 
// 1) start from division by 2, not 1 (trivial) ==> first index is 1, not 0
// 2) var length = divisors.length (calling before all iterations)
function findSmallestMultiple2(divisors) {
	var smallestMultipleFound = false,
	    currentNumber = 0,
	    len;
	
	while (!smallestMultipleFound) {
		currentNumber++;
		smallestMultipleFound = true;
		
		len = divisors.length;
		for (index = 1; index < len; index++) {
			if (currentNumber % divisors[index] != 0) {
				smallestMultipleFound = false;
				break;
			}
		}
	}
	
	return currentNumber;
}

// Optimization: never test odd numbers, as they wont divide by 2
function findSmallestMultiple3(divisors) {
	var smallestMultipleFound = false,
	    currentNumber = 0,
	    len;
	    
	while (!smallestMultipleFound) {
		currentNumber += 2;
		smallestMultipleFound = true;

		len = divisors.length
		for (index = 1; index < len; index++) {
			if (currentNumber % divisors[index] != 0) {
				smallestMultipleFound = false;
				break;
			}
		}
	}
	
	return currentNumber;
}

// Optimization: once found a divisor which gives a non-zero remainder , store it.
// Then, starting from the number which divides by this stored number, increment not by 1 or 2, but by this stored number's value.
// Store a new "bad divisor" only if it is greater than the one already stored.
// Saves a lot of iterations.
function findSmallestMultiple4(divisors) {
	var smallestMultipleFound = false;
	var step = 1;
	var currentNumber = divisors[divisors.length - 1] - step;
	var len;
	
	while (!smallestMultipleFound) {
		currentNumber += step;
		/*alert("checking " + currentNumber);*/
		// currentNumber (new value of step):   20 checking.. 3! (3), 21... 2, 24... 5! (5), 25... 2, 30... 4, ..., 60... 7! (7), 63, ...
		smallestMultipleFound = true;

		var len = divisors.length;
		for (index = 0; index < len; index++) {
			if (currentNumber % divisors[index] != 0) {
				smallestMultipleFound = false;
				
				if (divisors[index] > step) {
					step = divisors[index];
					/*alert("new step = " + step);*/
					// Get currentNumber to the closest number divided by the new step
					while (currentNumber % step != 0) {
						currentNumber++;
					}
					// Roll back, as it will be increased at the beginning of the next iteration
					currentNumber -= step;
				}

				break;
			}
		}

	}
	
	return currentNumber;
}