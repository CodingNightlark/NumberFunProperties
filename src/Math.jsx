function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isHappy(num) {
  // learn about sets to avoid infinite loops
    let sum =0
    let isHappy = false; 
    for (let i = 0; i < 100; i++) {
      sum = 0;
        for (let j = 0; j < num.length; j++) {
            let digit = parseInt(num.charAt(j), 10);
            if (isNaN(digit)) return false; // Handle non-numeric input
            sum += (digit * digit);
        }
        if (sum === 1) return isHappy = true;  

        else{
          num = sum.toString();
          
        }
    }  
}
 
function isTaxicab(num) {
    return null;
}

function isPerfect(num) {
  let divisorSum = 0
  for (let i =0; i<num; i++){
    if (num % i  === 0 ) {
      divisorSum += i;
    }
  }

  if ( divisorSum === num) {
    return true;
  }
} 



function isAbundant(num) {
  let divisorSum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisorSum += i;
    }
  }
  return divisorSum > num;
} 

function isSemiPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0 ) {
      sum += i;
    } 
  }
    if (sum === num) {
      return true;
    }
}

function isWeird(num) {
  if (isAbundant(num) && !isSemiPerfect(num)) {
    return true;
  }
  return false;
}

function isNarcissistic(num){
  return false; // Placeholder for future implementation
}

function isHarshad(num) {
  return false; // Placeholder for future implementation
}

function isAutomorphic(num) {
  return false; // Placeholder for future implementation
}
 
function isAmicable(num) {
  return false; // Placeholder for future implementation
} 

function isSmith(num) {
  return false; // Placeholder for future implementation
}

function isTriangular(num) {
  // n is triangular if and only if 8n + 1 is a perfect square
  let triangularCheck = 8 * num + 1;
  let sqrt = Math.sqrt(triangularCheck);
  let isSquareRootInteger = Number.isInteger(sqrt);
  if (isSquareRootInteger) {
    return true 
  }
  
  

}

function isBetrothed(num) {
  return false; // Placeholder for future implementation
}

function isSphenic(num) {
  return false; // Placeholder for future implementation 
} 

function isCarmichael(num) {
  return false; // Placeholder for future implementation
}  

function isPowerful(num) {
  return false; // Placeholder for future implementation
}




export { isPrime, isHappy, isTaxicab, isPerfect, isAbundant, isSemiPerfect, isWeird, isNarcissistic, isHarshad, isAutomorphic, isAmicable, isSmith, isTriangular, isBetrothed, isSphenic, isCarmichael, isPowerful };