// Largest palindrome product
function solveProblem4() {
  
  /*
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
  */

  var maxPalindrome = -1;
  var aFinal, bFinal;
  
  for (a = 100; a <= 999; a++) {
    for (b = 100; b <= 999; b++) {
    
      product = a*b;
      if (isPalindromeNumber(product)) {
	if (product > maxPalindrome) {
	  maxPalindrome = product;
	  aFinal = a;
	  bFinal = b;
	}
      }
      
    }
  }
  
  var resultString = maxPalindrome + " = " + aFinal + " * " + bFinal;
  document.getElementById("answer").innerHTML = resultString;  
}

function isPalindromeNumber(number) {
  numString = number.toString();
  
  // Example:
  // Length = 7. Comparing 0 <-> 6, 1 <-> 5, 2 <-> 4.
  for (i = 0; i < numString.length/2; i++) {
    char1 = numString.charAt(i);
    char2 = numString.charAt(numString.length - i - 1);
    
    if (char1 !== char2) {
      return false;
    }
    
  }
  
  return true;
}
