// Write a function that takes two or more arrays and returns a new 
// array of unique values in the order of the original provided arrays.

const unionSort = (...args) => {

  let flattenedArr = [].concat(...args);

  return Array.from(new Set(flattenedArr));
}
