// Flatten Nested Array
// Given a nested array, write a function that accounts for varying levels of nesting and returns
// a sorted flat array.
// e.g. flattenAndSort([[[3]], [[2]], 1]) = [1, 2, 3])

// method to solve: create a new array and concat array items using spread operator, 
// then use recursion to break down each element from an array to a primitive. Finally, sort. 

flattenAndSort = array => {
 
  flattenArr = array => {
    const flattenedArr = [].concat(...array);
    return flattenedArr.some(Array.isArray) ? flattenArr(flattenedArr) : flattenedArr;
  }

  return flattenArr(array).sort( (a,b) => a - b);
}