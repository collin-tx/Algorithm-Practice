// Chunk Arrays into subarrays
// Write a function that splits an array(first argument) into groups the length 
// of size (2nd argument), and returns them as a two-dimensional array.
// e.g. chunkArray(["a", "b", "c", "d"], 2) =[["a", "b"], ["c", "d"]]

// method to solve: simple for loop, push subarrays of size to final array.

const chunkArrayInGroups = (arr, size) => {
    
    const chunked = [];
    
    for (let i=0; i<arr.length; i+=size){
      chunked.push(arr.slice(i, i+size));
    }
    
    return chunked;
}
  