// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...args) {
  return args.reduce((a, b) => a + b);
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(n) {
  const primes = [];
  const isPrime = n => {
    let sqrt = Math.floor(Math.sqrt(n));

    if (n < 2){
        return false;
    }
    
    for (let i=2; i<=sqrt; i++){
        if (n % i === 0) {
            return false;
        }
    }
    return true;
  }

  for (let i=1; i<=n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.reduce((a,b) => a+b);
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...destroy) {
  return arr.filter(x => !destroy.includes(x));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(h) {

  let a = [];
  let c = [].concat(h).sort((a,b) => b - a);

  for (let x of h) {
    if (x < 0) {
      a.push(x);
    } else {
      a.push(Math.max(...c));
      c.shift();
    }
  }

  return a;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let ab = 'abcdefghijklmnopqrstuvwxyz';

  let start = ab.indexOf(str[0]);
  let end = ab.indexOf(str[str.length - 1]);

  let comp = ab.slice(start, end).split('');

  return comp.filter(l => !str.includes(l))[0];
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  return [
    arr.filter(n => n % 2 === 0).reduce((a,b) => a+b),
    arr.filter(n => n % 2 !== 0).reduce((a,b) => a+b),
  ];
}