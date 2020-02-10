// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


const getLetter = str => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const strArr = str.split('')

  const startIndex = abc.indexOf(strArr[0]);
  const endIndex = abc.indexOf(strArr[strArr.length - 1]) + 1;

  const abcCompare = abc.slice(startIndex, endIndex);
  const final = abcCompare.filter(a => !strArr.includes(a));

  return final[0];

}

console.log(getLetter("abce"));
