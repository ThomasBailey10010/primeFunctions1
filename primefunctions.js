// Thomas Bailey
// CS 320
// Assignment 4

function primeCheck(test) {
  if (test <= 1) {
    return false;
  }
  for (let i = 2; i < test; i++) {
    if (test % i === 0) {
      return false;
    }
  }
  return true;
}

function primeGen(pass) {
  const primes = [];
  for (let i = 0; i < pass; i++) {
    if (primeCheck(i) === true) {
      primes.push(i);
      // console.log(i);
    }
  }
  return primes;
}

// Test 1
// primeGen(100);

function cumulativeSum(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
    // console.log(sum);
  }
  return sum;
}

// Test 2
// cumulativeSum([1, 2, 3, 4]);

function maxPrimeSum(pass) {
  let size = 0;
  let largest = 0;
  let sum = 0;
  // Create list of primes
  const primeList = primeGen(pass);
  // outer loop for checking all possible combinations
  for (let i = 0; i < primeList.length; i++) {
    sum = 0;
    // inner loop for checking current iteration
    for (let k = 0; i < primeList.length; k++) {
      sum += primeList[k];
      // Do not exceed size of number
      if (sum > pass) {
        // While loop would be more graceful ?
        break;
      }
      // Check if prime and larger than current largest and are there more additions
      if (primeCheck(sum) && size < (k - i) && largest < sum) {
        // Update largest
        largest = sum;
        // Update longest
        size = (k - i);
      }
    }
  }
  // Increment size to account for starting at one
  const ret = [largest, ++size];
  return (ret);
}

// Test 3
// console.log(maxPrimeSum(100));
// console.log(maxPrimeSum(1000));
// I have no idea what im doing and why doesnt git doesnt work
