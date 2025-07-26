function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isHappy(num) {
    let sum =0
    num = num.toString();
    for (let i = 0; i < 100; i++){
        for (let j = 0; j < num.length; j++) {
            
            sum += (num.chartAt(j)  * num.charAt(j));
        }
        if (sum === 1) return true;
    }
}