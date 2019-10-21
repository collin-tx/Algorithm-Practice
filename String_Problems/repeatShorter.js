// Write a function that repeats the shorter string until it is equal to the length of the longer string.

const lengthen = (s1, s2) => {
    
    let shorter = s1.length > s2.length ? s2 : s1; 
    let longer = s1.length < s2.length ? s2 : s1; 

    while (shorter.length < longer.length){
        shorter += shorter.slice(0, longer.length - shorter.length);
    }
    
    return shorter;
}