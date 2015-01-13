/*
  Largest palindrome product


  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/

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


function findLargestPalindrome(min,max) {
  var maxPalindrome = -1;
  var aFinal, bFinal;
  
  for (a = min; a <= max; a++) {
    for (b = min; b <= max; b++) {
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
  return resultString;  
}

console.log(findLargestPalindrome(100,999));
