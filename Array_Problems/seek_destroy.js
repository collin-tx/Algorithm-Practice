// Seek and Destroy
// Write a function that returns array without the arguments passed 
//outside the original array
// e.g. destroyer([1, 2, 3, 1, 2, 3], 2, 3) = [1, 1];

//method to solve: split arguments into separate variables,
//create new array to hold numbers not included in extra-array arguments



//reworked solution into one line
const destroyer2 = (arr, ...targets) => arr.filter(n => !targets.includes(n));


// original solution
function destroyer(arr) {
    let newArr = arguments;
    let firstArr = [...arguments[0]];
    delete newArr[0];
    let med = [];
    let finalArr = [];
  
    for (let x in newArr){
        med.push(newArr[x]);
    }
  
    for (let i of firstArr){
    if (med.indexOf(i) < 0){
      finalArr.push(i);
    }
    }
  return finalArr;
}