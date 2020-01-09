// Project Euler Problem
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.


const sumMultiples = number => {
  let arr = [];
  for (let i=1; i<number; i++){
    if (i%3===0 || i%5===0){
      arr.push(i);
    }
  }
  return arr.reduce((a,b) => a+b);
}

// console.log(sumMultiples(100000));
