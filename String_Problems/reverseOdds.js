// Given a string, reverse all the words which have odd length. The even length words are not changed.

function reverseOdd(str) {
	let arr = str.split(' ');
	let newArr = [];
	for (let word of arr){
		if (word.length % 2 !== 0){
			word = word.split('').reverse().join('');
		}
		newArr.push(word);
	}
	return newArr.join(' ');
}

//console.log(reverseOdd('Make sure you only reverse words of odd length'));