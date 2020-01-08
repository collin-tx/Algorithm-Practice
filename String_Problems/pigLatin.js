// Translate the provided string (word) to pig latin.

const toPigLatin = str => {
  let arr = str.toLowerCase().split('');
  let vowelRegex = /[aeiou]/i;
  let globalVowels = /[aeiou]/ig;
  const startsWithVowel = vowelRegex.test(arr[0]);
  const secondLetterVowel = vowelRegex.test(arr[1]);
  const thirdLetterVowel = vowelRegex.test(arr[2]);
  const fourthLetterVowel = vowelRegex.test(arr[3]);

  if(!globalVowels.test(str)){
    return str + 'ay';
  }

  if (startsWithVowel){
    arr.push('way');
    return arr.join('');
  }
   if(!startsWithVowel && secondLetterVowel){
    const firstLetter = arr.shift();
    arr.push(firstLetter, 'a', 'y');
    return arr.join('');
  }

  if (!startsWithVowel && !secondLetterVowel && thirdLetterVowel){
    const firstLetter = arr.shift();
    const secondLetter = arr.shift();
    arr.push(firstLetter, secondLetter, 'a', 'y');
    return arr.join('');
  }

  if(!startsWithVowel && !secondLetterVowel && !thirdLetterVowel && fourthLetterVowel){
    const firstLetter = arr.shift();
    const secondLetter = arr.shift();
    const thirdLetter = arr.shift();
    arr.push(firstLetter, secondLetter, thirdLetter, 'a', 'y');
    return arr.join('');
  }
  if(!startsWithVowel && !secondLetterVowel && !thirdLetterVowel && !fourthLetterVowel){
    const firstLetter = arr.shift();
    const secondLetter = arr.shift();
    const thirdLetter = arr.shift();
    const fourthLetter = arr.shift();
    arr.push(firstLetter, secondLetter, thirdLetter, fourthLetter, 'a', 'y');
    return arr.join('');
  }

  return 'Invalid string: please provide an actual word.'
}


console.log(toPigLatin('rhythm'));