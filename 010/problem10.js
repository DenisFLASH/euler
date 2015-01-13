/*
	Summation of primes

	The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
	Find the sum of all the primes below two million.
*/

function sumOfAllPrimes (maxNumber) {
	var sum = 0;
	for (var number = 2; number < maxNumber; number++) {
		if (isPrime(number)) {
			sum += number;
		}
	}
	return sum;
}


// Optimization : dividing only by PRIME factors
function sumOfAllPrimes2 (maxNumber) {
	var sum = 0,
		primes = [];

	for (var number = 2; number < maxNumber; number++) {
		if (isPrime2(number, primes)) {
			primes.push(number);
			sum += number;
		}
	}
	return sum;
}


function isPrime(number) {
	if (number <= 1) {
		return false;
	}
	// Optimization: isPrime function loops till Sqrt(N) instead of N-1	
	sqrt = Math.floor(Math.sqrt(number)) + 1; // Example: Sqrt(37) = 6.08 --> 7
	for (var i = 2; i < sqrt; i++) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}


// Optimization : dividing only by PRIME factors
function isPrime2(number, primes) {
	if (number <= 1) {
		return false;
	}

	// loops till Sqrt(N) instead of N-1		
	var sqrt = Math.floor(Math.sqrt(number)); // Example: Sqrt(37) = 6.08 --> 7;  Sqrt(100) = 10	
	for (var i = 0; i < primes.length; i++) {
		if (primes[i] > sqrt) {
			break;
		}
		if (number % primes[i] == 0) {
			return false;
		}
	}
	return true;
}


function solveProblem10(maxNumber) {
	var sum,
		start,
		time;
	
	start = new Date().getTime();
	sum = sumOfAllPrimes(maxNumber);
	time = new Date().getTime() - start;
	console.log('Sum of all the primes below ' + maxNumber + ' is' + sum + '\nsumOfAllPrimes() execution time: ' + time + ' ms');
	
	start = new Date().getTime();
	sum = sumOfAllPrimes2(maxNumber);
	time = new Date().getTime() - start;
	console.log('Sum of all the primes below ' + maxNumber + ' is' + sum + '\nsumOfAllPrimes2() execution time: ' + time + ' ms');
}


solveProblem10(2000000);