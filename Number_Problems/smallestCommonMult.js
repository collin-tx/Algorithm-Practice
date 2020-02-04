// Find the smallest common multiple of the provided parameters 
// that can be evenly divided by both, as well as by all sequential
// numbers in the range between these parameters. The range will be 
// an array of two numbers that will not necessarily be in numerical order.

const findNumber = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = [];

  for(let i=min; i<=max; i++){
    range.push(i);
  }

  for (let i=max; i<Infinity; i++){
    if(range.every(n => i % n === 0)){
      return i;
    }
  }
}

console.log(findNumber([8, 18]));
