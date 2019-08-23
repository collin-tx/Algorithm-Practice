// Flatten Nested Array
// Given a nested array, write a function that accounts for varying levels of nesting and returns
// a flat array.
// e.g. flattenArr([[["a"]], [["b"]], "c"]) = ["a", "b", "c"])

// method to solve: create a new array and concat array items using spread operator, 
// then use recursion to break down each element from an array to a primitive

function flattenArr(arr) {

    const flattenedArr = [].concat(...arr);
  
    return flattenedArr.some(Array.isArray) ? flattenArr(flattenedArr) : flattenedArr;
}
  