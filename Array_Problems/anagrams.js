//Anagrams
// Given two strings, write a function to determine whether they are anagrams.
// Eg.
// isAnagram("", "") = true
// isAnagram("A", "A") = true
// isAnagram("A", "B") = false
// isAnagram("ab", "ba") = true
// isAnagram("AB", "ab") = true

//method to solve: turn strings into arrays, sort them and test if they are equal

const isAnagram = (target, test) => {
    // strings into lowercase arrays
    test = test.toLowerCase().split('');
    target = target.toLowerCase().split('');

    // sorter function
    const sorter = (a, b) => a > b ? 1 : -1;
    
    //sorting arrays alphabetically, turning back to strings
    test = test.sort(sorter).join('');
    target = target.sort(sorter).join('');

    return target === test;
};
