// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

const replace = (string, before, after) => {

  if (before[0] === before[0].toUpperCase()){
    after = after[0].toUpperCase() + after.slice(1);
  }

  let newString = string.replace(before, after);
  return newString;
}

console.log(replace("Let us go to the Store", "Store", "mall"));