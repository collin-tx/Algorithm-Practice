// Write a function that receives two portions of a path and joins them. 
// The portions will be joined with the "/" separator. 
// There could be only one separator and if it is not present it should be added.

const joinPath = (portion1, portion2) => {
	portion1 = portion1.split('').filter(c => c !== '/').join('');
	portion2 = portion2.split('').filter(c => c !== '/').join('');
	return `${portion1}/${portion2}`;
}
