// Write a function that converts an object into an array of keys and values.
// e.g. objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) returns [["D", 1], ["B", 2], ["C", 3]]

const objectToArray = obj => {
	let arr = [];
	let keys = Object.keys(obj);
	for (let i=0; i<Object.keys(obj).length; i++){
		let sub = [keys[i], obj[keys[i]]];
		arr.push(sub);
	}
	return arr;
}