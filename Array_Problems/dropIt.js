// Given the array arr, iterate through and remove each element 
// starting from the first element (the 0 index) until the function 
// returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, 
// otherwise, arr should be returned as an empty array.


const dropElements = (arr, func) => {

  for (let n of arr){
    if (func(n)){
      return arr.slice(arr.indexOf(n));
    }
  }
  return [];
}

console.log(dropElements([1, 2, 3, 4], (n) => n >= 3));