// Write a function that returns the duplicated items in a given array


// one method is to use .filter() to check for multiple indeces of the same number
const duplicates = arr => {
    let dupes = arr.filter((num, index) => {
    return arr.indexOf(num) == index && arr.lastIndexOf(num) !== index;
    });
    
    return dupes;
}


// another method is to use a hashtable and .filter()
const findDupes = arr => {
    let hash = {};

    for (let n of arr){
        if (!hash[n]){
            hash[n] = 1;
        } else {
        hash[n] += 1;
        }
    }
    let result = Object.keys(hash).filter(n => hash[n] >= 2);
    return result;
}
