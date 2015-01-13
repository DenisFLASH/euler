// Special Pythagorean triplet
function solveProblem9() {
	/*
	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
	a^2 + b^2 = c^2
	For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
	There exists exactly one Pythagorean triplet for which a + b + c = 1000.
	Find the product abc.
	*/
 
  var triplet = getPythagoreanTripletWithGivenSum(1000);
  var a = triplet.a,
      b = triplet.b,
      c = triplet.c,
      product = triplet.product;
  
  var resultString = "Pythagorean triplet:<br>";
  resultString += a + "^2 + " + b + "^2 = " + a*a + " + " + b*b + "<br>";
  resultString += c + "^2 = " + c*c + "<br>";
  resultString += "Product = " + a + " * " + b + " * " + c + " = " + product;
  document.getElementById("answer").innerHTML = resultString; 
}

function getPythagoreanTripletWithGivenSum (sum) {
  
 /* We look for a + b + c == 1000 (example), a^2 + b^2 == c^2
  * 
    c
    bc
    b c
    b  c
    b   c
    b    c
    b     c
    aaaaaaac
    
    Pythagorean triplet ==> c > a, c > b, a + b > c
    ==> a_min, b_min = 1, c_min = 2; a_max, b_max = 498, c_max = 499  ==> approximately 1 <= a,b,c < 500 = sum/2
  */
 
  
  var MAX = sum / 2;
  var triplet = {};
    
  for (var a = 1; a < MAX; a++) {
    for (var b = 1; b < MAX; b++) {
      for (var c = 1; c < MAX; c++) {
    
	if (isPythagoreanTriplet(a, b, c)) {
	  if (a + b + c == sum) {
	    triplet.a = a;
	    triplet.b = b;
	    triplet.c = c;
	    triplet.product = a*b*c;
	    
	    return triplet;
	  }
	}
	
      }
    }
  }
  // If no triplet found
  return triplet;
}

function isPythagoreanTriplet(a, b, c) {
  
  return (a*a + b*b == c*c);
}