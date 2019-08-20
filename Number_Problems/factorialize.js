//Factorialize 
// write a function that returns the factorial of n
// e.g. factorialize(5) = 120

//method to solve - simple recursion

const factorialize = (num) => {
  return num === 0 ? 1 : num * factorialize(num - 1);
}
