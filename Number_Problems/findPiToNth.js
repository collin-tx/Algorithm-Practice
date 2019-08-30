// Find Pi to the Nth decimal place, setting a limitation on how many digits can be returned.

const findPIToNth = (number) => {

   if(number > 50){
       number = 50
   } else if (number === undefined){
       return 'How would you like your PI?'
   }

   return (16 * Math.atan(0.2) - 4 * Math.atan(1/239)).toFixed(number);
}

console.log(findPIToNth());