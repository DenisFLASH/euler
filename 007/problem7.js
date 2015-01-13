// 10001st prime
function solveProblem7() {
	/*
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
	What is the 10 001st prime number?
	*/
	
	var COUNT = 10001;
	var resultString = "<br/>" + COUNT + "th prime number is " + getNthPrimeNumber(COUNT);
	document.getElementById("answer").innerHTML = resultString;  
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
