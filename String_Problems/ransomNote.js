// Given a magazine of words and a ransom note, determine if it’s possible 
// to “cut out” and create the ransom note from the magazine words.

// method: to make sure algorithm scales in linear time, create a hash table of 
// magazine words and check the note words against the table


const ransomNote = (note, magazine) => {
    const magazineWords = magazine.split(' ');
    const magazineHash = {};

    for(let word of magazineWords){
        if(!magazineHash[word]){
            magazineHash[word] = 0;
        }
        magazineHash[word]++;
    }

    const noteWords = note.split(' ');
    let possibility = true;

    // check magazine word object for each note word, subtracts each time there is a match
    // returns whether it is possible to create a note from the magazine or not
    noteWords.forEach(word => {
        if(magazineHash[word]){
            magazineHash[word]--;
            if (magazineHash[word] < 0){
                possibility = false;
            }
        } else possibility = false;
    });
    return possibility;
}
