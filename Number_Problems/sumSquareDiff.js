// Sum Square Difference
// Find the difference between the sum of the squares of n 
// range of natural numbers and the square of the sum.
// e.g. sumSquareDiff(100) = 25164150 -- the difference between the sum of (1-100)^2 and (1^2, 2^2...100^2).

// method to solve: find sum of squares in range, find square of sum in range then get difference
sumSquareDifference = (n) => {

    // get sum of all squared numbers in a range
    findSumOfSquares = (n) => {
      let sum = 0;
      for (let i=1; i<=n; i++){
        let sq = i * i;
        sum += sq;
      }
      return sum;
    }
    
    // get square of sum of numbers in a range
    findSquareOfSum = (n) => {
      let sum = 0;
      for (let i=1; i<=n; i++){
        sum += i;
      }
      return sum * sum;
    }
    
    // create array of two values, if equal return 0, else return the difference.
    let sqArr = [findSquareOfSum(n), findSumOfSquares(n)];
    if (sqArr[0] === sqArr[1]) return 0;
    return Math.max(...sqArr) - Math.min(...sqArr);
    }
    
    console.log(sumSquareDifference(10));