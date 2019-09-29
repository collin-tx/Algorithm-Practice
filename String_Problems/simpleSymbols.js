//Have the function symbolsTest(str) take the str parameter being passed
//and determine if it is an acceptable sequence by either returning the string
// true or false. The str parameter will be composed of + and = symbols with 
//several characters between them (ie. ++d+===+c++==a) and for the string to be true 
//each letter must be surrounded by a + symbol. So the string to the left would be false.

//e.g. symbolsTest("f++d+") = false, symbolsTest("+f++d+") = true

const symbolsTest = str => { 

    str = str.split('');
    let newStr = str.filter(i => 'abcdefghijklmnopqrstuvwxyz'.split('').includes(i));
    let bools = [];
    
    for(let letter of newStr){
      let index = str.indexOf(letter);
      str[index - 1] === '+' && str[index + 1] === '+' ? bools.push(true) : bools.push(false);
    }
    return bools.includes(false) ? false : true;
             
}