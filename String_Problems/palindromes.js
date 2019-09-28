//Palindrome Checker
//given a string, write a function to check if it is a palindrome, 
// ignoring case and nonalphanumberic characters
// eg. palindrome('_race|car') == true

const palindrome = str => {
  let original = str.replace(/\W+|_/g, '').toLowerCase().split('');
  let reversed = [...original].reverse();
  return original.join('') === reversed.join('');
}