// Given k sorted arrays, merge them into a single sorted array
//ex. merge([[1, 4, 7],[2, 5, 8],[3, 6, 9]]) = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//method to solve: 
// concat arrays into master, then sort master array

const merge = (arr) => {
    let masterArr = [];

    for (let k of arr){
       masterArr.push(...k);
    }

    masterArr.sort((a, b) => a - b);

    return masterArr;
}
