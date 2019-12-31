// Create a function to convert an array of percentages to their decimal equivalents.

const convertToDecimal = perc => {
	let result = perc.map(p => {
		return p = (Number(p.split('').filter(n => n !== '%').join(''))/100);
	});
	return result;
}

console.log(convertToDecimal(['3%', '99%', '23%']));
