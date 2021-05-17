// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  const words = sen.split(' ');
  const wordLengths = words.map(w => w.length);

  const max = Math.max(...wordLengths);


  // solution 1
  // return words[wordLengths.indexOf(max)];

  // solution 2
  // return words.filter(w => w.length === max);


  // solution 3
  const longest = words.filter(w => w.length === max);
  return longest.length > 1 ? longest : longest[0];

}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

  let final = [];

  for (let i=0; i<arr.length; i+=len) {
    final.push(arr.slice(i, i + len));
  }

  return final;

}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

const flattenArray = (arrays) => [].concat(...arrays).some(Array.isArray) ? flattenArray([].concat(...arrays)) : [].concat(...arrays);

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  const a = {};

  str1.split('').forEach(l => a[l] ? a[l] = a[l]+1 : a[l] = 1);
  str2.split('').forEach(l => a[l] ? a[l] = a[l]-1 : a[l] = -1);

  return !Object.values(a).some(n => n < 0);
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  str = str.toLowerCase();
  const ab = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const vowels = 'aeiou'.split('');

  let word = str.split('').map(letter => {
    if (letter === 'z') {
      return 'A';
    }

    let newLetter = ab[ab.indexOf(letter.toLowerCase()) + 1];
    return vowels.includes(newLetter) ? newLetter.toUpperCase() : newLetter;
  });

  return word.join('');
}