// Given an array of numbers, calculate the mean, median, and mode.

class Statistics {
    constructor(array){
        this.array = array;
    }

    getMean = () => {
        return this.array.reduce((sum, value) => sum + value) / this.array.length;
    }

    getMedian = () => {

        const sortedArray = this.array.sort();
        
        // if array has odd amount of items
        if (sortedArray.length % 2 !== 0){
            let modeIndex = Math.floor(sortedArray.length / 2);
            return sortedArray[modeIndex];
        }

        // if array has even amount of items
        let a = sortedArray[(sortedArray.length / 2) - 1];
        let b = sortedArray[(sortedArray.length / 2)]
        return (a + b) / 2;

    }

    getMode = () => {
        const table = {};

        this.array.forEach(number => {
            table[number] = table[number] + 1 || 1;
        });

        let modes = [];
        let maxCount = 0;

        // which item appears most, accounting for bimodal, trimodal and multimodal arrays
        for(let key in table){
            const value = Number(key);
            const count = table[key];
            if (count > maxCount){
                modes = [value];
                maxCount = count;
            } else if (count === maxCount){
                modes.push(value);
            }
            // if all items appear an equal amount of times, there is no mode
            if(modes.length === Object.keys(table).length){
                modes = [];
            }
        }
        // returns array of modes if array is not monomodal
        return modes.length > 1 ? modes : modes[0];
    }
}

const mathy = new Statistics([110, 3, 40, 8, 6, 2, 5, 6, 420, 420, 7, 7, 7, 798, 4000, 420, 14, 56, 88888]);
console.log(mathy.getMode(), mathy.getMean(), mathy.getMedian());