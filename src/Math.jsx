function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isHappy(num) {
    let sum =0
    let isHappy = false;
    num = num.toString();
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
  return false; // Placeholder for future implementation
}

function isWeird(num) {
  if (isAbundant(num) && !isSemiPerfect(num)) {
    return true;
  }
  return false;
}



export { isPrime, isHappy, isTaxicab, isPerfect };