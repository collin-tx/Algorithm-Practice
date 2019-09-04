// write a function to find the largest palindrome made 
// from the product of two 3-digit numbers.

largestPal = (num) => {
	let pal;
	for (let i = 999; i>=800; i--){
		if (String(i * num) === String(i * num).split('').reverse().join('')){
			pal = i * num;
        }
    }
	return typeof pal === 'undefined' ? largestPal(num - 1) : pal;
}