//Palindrome Checker
//given a string, write a function to check if it is a palindrome, 
// ignoring case and nonalphanumberic characters
// eg. palindrome('_race|car') == true

function palindrome(str) {
    let orig = str.replace(/\W+|_/g, '').toLowerCase();
    orig = orig.split('');
    let reverse = [...orig].reverse();
    return reverse.join('') === orig.join('');
  };