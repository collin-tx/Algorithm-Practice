// Symmetric difference between two arrays
// compare two arrays and return the items only contained in one of the arrays
// e.g. getDiff([1, 2, 3, 5], [1, 2, 3, 4, 5]) = [4];

// method to solve: loop over both arrays, push unique items to newArr


const getDiff = (arr1, arr2) => {
    var newArr = [];

    for (let n of arr1){
      if (arr2.indexOf(n) < 0){
        newArr.push(n);
      }
    }
    for (let n of arr2){
      if (arr1.indexOf(n) < 0 && newArr.indexOf(n) < 0){
        newArr.push(n);
      }
    }
    return newArr;
  
}
  
