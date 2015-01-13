// Summation of primes
function solveProblem10() {
	/*
	The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
	Find the sum of all the primes below two million.
	*/

	var MAX_NUMBER = 2000000,
		sum,
		start,
		time;
	
	start = new Date().getTime();
	sum = sumOfAllPrimes(MAX_NUMBER);
	time = new Date().getTime() - start;
	document.getElementById('answer').innerHTML = 'Sum of all the primes below ' + MAX_NUMBER + ' is\n' + sum + '<br>sumOfAllPrimes() execution time: ' + time + ' ms<br>';
	
	start = new Date().getTime();
	sum = sumOfAllPrimes2(MAX_NUMBER);
	time = new Date().getTime() - start;
	document.getElementById('answer').innerHTML += 'Sum of all the primes below ' + MAX_NUMBER + ' is\n' + sum + '<br>sumOfAllPrimes2() execution time: ' + time + ' ms<br>';
}

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