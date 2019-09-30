// Dynamic Staircase
// Write a program that prints a staircase of size n, using #'s and spaces
// staircase must be right-aligned 
// e.g. staircase(6) = 
//      #
//     ##
//    ###
//   ####
//  #####
// ######

const staircase = n => {
    let stair = ['#'];

    for(let i=1; i<n; i++){
        stair.unshift(' ');
    }

    for (let i=1; i<=n; i++){
        console.log(stair.join(''));
        stair.shift();
        stair.push('#');
    }
};