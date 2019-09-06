//Given an array of numbers, return all pairs that add up to a given sum. 
//The numbers can be used more than once.

// method to solve - loop through array and get pairs that add up to sum,
// check that both numbers in pair exist in array and add them to a return array
// if they don't already exist in the return array. 

const twoSum = (array, sum) => {
    let pairs = [];
    let store = [];


    for (let num1 of array){
        let num2 = sum - num1;

        if(store.indexOf(num2) == -1 && array.includes(num2)){
            pairs.push([num1, num2]);
            store.push(num1);
        }
    }

    return pairs;
}

