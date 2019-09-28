// Spinal Case a given string
// write a function that converts any string to spinal case (all lowercase words joined by dashes)
// e.g. spinalCase('AlwaysSunny_inPhiladelphia') = always-sunny-in-philadelphia

const spinalCase = str => {
    let newStr = str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
    return newStr;
}