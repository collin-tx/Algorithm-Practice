//Find Duplicates
//Given an array of integers where each value 1 <= x <= len(array), write
//a function that finds all the duplicates in the array.

//Ex. 
// dups([1, 2, 3]) = []
// dups([1, 2, 2]) = [2]
// dups([3, 3, 3]) = [3]
// dups([2, 1, 2, 1]) = [1, 2]

//method to solve: split duplicates into separate array, return new array without duplicates

const dups = (arr) => {
    let newArr = [];
    let toRemove = [];

    // split into separate arrays
    for (let num of arr){
        if (newArr.indexOf(num) < 0){
            newArr.push(num);
        } else {
            toRemove.push(num);
        }
    }

    // filter out duplicates from new array
   newArr = newArr.filter(num => {
       return toRemove.indexOf(num) === -1;
   });

   return newArr;
};