//FizzBuzz 
//prints 1-100 but fizz buzz for numbers divisible by 3 and 5
//fizz for numbers divisible by 3 and buzz for 5s

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


printFizzBuzz(100);