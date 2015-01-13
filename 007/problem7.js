/*
	10001st prime

	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
	What is the 10 001st prime number?
*/

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


function getNthPrimeNumber(N) {
	var primeNumberCount = 0;
	var currentNumber = 0;
	
	while(primeNumberCount != N) {
		currentNumber++;
		if (isPrime(currentNumber)) {
			primeNumberCount++;
		}
	}
	return currentNumber;
}


console.log(getNthPrimeNumber(10001));