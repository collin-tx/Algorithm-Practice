// Where Do I belong?
// given a random array and num, write a function that returns the index num
// should be placed in, if the array was sorted;
// e.g. indexOfNum([1, 3, 7, 5], 2) = 1;

const indexOfNum = (arr, num) => {
    let sorted = arr.sort( (a,b) => a-b);
  
    for(let n of sorted){
      if (n > num || n === num){
        return sorted.indexOf(n);
      } 
    }
    return sorted.length;
}
  
