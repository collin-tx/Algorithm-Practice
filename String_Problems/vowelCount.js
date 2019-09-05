// write a function that given a string of words or phrases, counts the number of vowels.

const vowelCount = string => {
    let matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}