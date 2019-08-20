//Largest Numbers in Arrays
//Return Largest Number in each subarray of a given array

//method to solve: nested for loop, push biggest in each array to a new array

const largestOfArrays = arr => {
    let largestArr = [];
  
    for(let i=0; i<arr.length; i++){
      let biggestOfEach = arr[i][0];
  
      for (let j=0; j<arr[i].length; j++){
        if (arr[i][j] > biggestOfEach){
          biggestOfEach = arr[i][j];
        }
      }
      largestArr.push(biggestOfEach);
    }
    return largestArr;
}
  