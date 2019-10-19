//Create a function that takes a string and returns the middle character(s). 
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle two characters.

const getMiddle = str => {
	return str.length % 2 === 1 ? str.charAt(((str.length - 1)/2)) : str.slice((str.length / 2) - 1, (str.length / 2) + 1)
};