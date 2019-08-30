//Check whether a given integer is a perfect power. 
//If it is a perfect power, return a pair m and k with m^k = n as a proof, else return null

const isPP = (n) => {
    for (let m=2; m * m <= n ; m++){
        for (let k=2; m**k <= n; k++){
            if (m ** k === n){
                return [m, k]
            }
        }
      }
      return null;
}