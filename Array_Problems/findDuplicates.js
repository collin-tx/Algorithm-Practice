// Write a function that returns the duplicated items in a given array

const duplicates = arr => {
    let dupes = arr.filter((num, index) => {
    return arr.indexOf(num) == index && arr.lastIndexOf(num) !== index;
    });
    
    return dupes;
}
