// Swap Variables 
//Given two integers, write a function that swaps them without using any
//temporary variables

//method to solve: use destructuring to swap values 

const swapVariables = (a, b) => {
    [a, b] = [b, a];
    console.log(a, b);
}
  
  