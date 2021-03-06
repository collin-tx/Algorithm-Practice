// Title Case a Sentence
// given a string with any combo of capitalizations, return a string that is title cased
// e.g. titleCase('onE SMALL steP FOr MaN') = 'One Small Step For Man'

const titleCase = str => {
    let newStr = str.toLowerCase().split(' ');
    let final = [];
    
    for (let word of newStr){
        word = word[0].toUpperCase() + word.slice(1);
        final.push(word);
    }
    return final.join(' ');
}