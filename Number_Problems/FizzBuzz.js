//FizzBuzz 
//prints 1-100 but fizz buzz for numbers divisible by 3 and 5
//fizz for numbers divisible by 3 and buzz for 5s



// solution using only for loop
const printFizzBuzz = (num) => {
for (let i=1; i<=num; i++){
    //lowest common multiple 
  if (i % 15 === 0){
    console.log('FizzBuzz');
    continue;
  } else if (i % 3 === 0){
    console.log('Fizz');
    continue;
  } else if (i%5 === 0){
    console.log('Buzz');
    continue;
  } 
  console.log(i);
}
}

// solution using array
const fizzy = n => {
  
  let arr  = [];
  
  for(let i=1; i<=n; i++){
    if(i % 15 ===0){
      arr.push('Fizzbuzz');
    } else if(i % 5 === 0){
      arr.push('Fizz');
    } else if(i % 3 === 0){
     arr.push('buzz');
    } else {
      arr.push(i);
    }
  }
  arr.forEach(i => console.log(i));
}

// solution using .map()

const fizzyMap = n => {
  let array = []
  for(let i=1; i<=n; i++){
    array.push(i);
  }
  let result = array.map(num => {
    if (num % 15 === 0) num = 'FizzBUZZ';
    if (num % 3 === 0) num = 'Buzz';
    if(num % 5 === 0) num = 'Fizz';
    return num;
  });
  console.log(...result);
}

fizzyMap(100)