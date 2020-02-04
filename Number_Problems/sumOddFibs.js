// Given a positive integer num, return the sum of all 
// odd Fibonacci numbers that are less than or equal to num.

const sumOddFibs = (num) => {
  
  const getFibs = (n) => {
    let fibs = [0, 1];
    for (let i=2; i<=n; i++){
      fibs[i] = fibs[i - 2] + fibs[i - 1];
    }
    return fibs;
  }

  let oddFibs = getFibs(num)
    .filter(n => n % 2 !== 0 && n <= num);

  return oddFibs.reduce((a,b) => a + b);
}

console.log(sumOddFibs(4));