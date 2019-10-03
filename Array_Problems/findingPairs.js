// Write a function that return how many pairs can be found 
// in a given array of numbers

const pairCounter = arr => {
    let result = 0;
    let hash = {};
    for(let i=0; i<arr.length; i++){
        if(!hash[arr[i]]){
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++
        }
    }

    for(let key in hash){
        if(hash[key] % 2 == 0){
            result += (hash[key] / 2);
        } else if (hash[key] > 2){
            result += ((hash[key] -1) / 2);
        }
    }
    return result;
}
