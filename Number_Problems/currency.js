//Write a function that, given number N, returns an object indicating the fewest bills one needs to have $N

const currencyInBills = num => {
    let obj = {
        hundreds: 0,
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0
    }

    let store = num;

    if (num >= 100){
        let bills = Math.floor(Number(num / 100));
        obj.hundreds = bills;
        store = num % 100;

        console.log('hundreds are' + bills)
    }

    if (store >= 20){
        let bills =  Math.floor(Number(store / 20));
        obj.twenties = bills;
        store = store - (bills * 20);
    }

    if (store >= 10){
        obj.tens = 1;
        store = store - 10;
    }

    if (store >= 5){
        obj.fives = 1;
        store = store - 5;
    }

    obj.ones = store;

    return obj;
}