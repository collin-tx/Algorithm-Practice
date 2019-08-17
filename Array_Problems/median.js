// Median of Arrays | Find the median of two pre-sorted arrays.

// Example
// arr1 = [1, 3, 5]
// arr2 = [2, 4, 6]
// median(arr1, arr2) = 3.5


//method to solve: 
//concat arrays together, then sort, then calculate median of master array

const median = (arr1, arr2) => {
    // concat arrays together
    const masterArr = [...arr1, ...arr2];
    // sort concatted array
    masterArr.sort( (a ,b) => a - b);
    console.log(masterArr);
    //get length of master 
    const length = masterArr.length;

    if (masterArr.length % 2 === 1){
        //if array has odd number of items, return middle item
        return masterArr[(length - 1) / 2]
    } else {
        //if array has even items, return average of two closest to middle
        const lower = masterArr[length / 2];
        const upper = masterArr[(length / 2) + 1];

        return (lower + upper) / 2;
    }
}
