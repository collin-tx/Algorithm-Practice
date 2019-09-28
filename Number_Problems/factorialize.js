//Factorialize 
// write a function that returns the factorial of n
// e.g. factorialize(5) = 120

//method to solve - simple recursion

const factorialize = (num) => {
  return num === 0 ? 1 : num * factorialize(num - 1);
}


//or solve using loop + reduce

const factorializeLoop = num => {
  let nums = [];
  if (num === 1 || num === 0) return num;
  if (num < 0) return 'try a positive number!'
  for (let i=num; i>1; i--){
    nums.push(i);
  }
  return nums.reduce((a,b) => a * b);
}