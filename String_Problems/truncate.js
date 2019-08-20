// Truncate a string
// write a function that takes a string and num, then returns the string
// limited to the characters of num followed by ellipsis 

const truncateString = (str, num) => {
    // if num >= str length, just return str
    if (str.length <= num){
      return str;
    }
    // slice string to num characters, concatenating ellipsis
    return str.slice(0, num) + "...";
}
  