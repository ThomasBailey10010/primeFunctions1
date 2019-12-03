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
// console.log(primeGen(100));


// Changed cumulativeSum to reflect grade comments
function cumulativeSum(list) {
  // Set current sum to elemet 0
  let sum = list[0];
  // Copy list
  const sumList = list;
  // For all elements starting at second element
  for (let i = 1; i < sumList.length; i++) {
    // Increment current element by running sum
    sumList[i] += sum;
    // Update running sum
    sum = sumList[i];
  }
  return sumList;
}

// Test 2
// console.log(cumulativeSum([1, 2, 3, 4]));

function maxPrimeSum(pass) {
  let size = 0;
  let largest = 0;
  let sum = 0;
  const primeList = primeGen(pass);
  for (let i = 0; i < primeList.length; i++) {
    sum = 0;
    for (let k = i; k < primeList.length; k++) {
      sum += primeList[k];
      if (sum > pass) {
        break;
      }
      if (primeCheck(sum) && size < (k - i) && largest < sum) {
        largest = sum;
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
