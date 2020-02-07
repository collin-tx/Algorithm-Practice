// Flatten a nested array. You must account for varying levels of nesting.

const flattener = array => {

    const flattenedArr = [].concat(...array);
    return flattenedArr.some(Array.isArray) ? flattener(flattenedArr) : flattenedArr;

}

console.log(flattener([1, [2, [3]]]));