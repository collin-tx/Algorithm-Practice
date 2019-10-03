// Write functions that rotate an array's items to the left or right by N

const rotateLeft = (arr, n) => {
    let arrCopy = [...arr];
    for (let i=1; i<=n; i++){
        arrCopy.push(arrCopy.shift());
    }
    return arrCopy;
}

const rotateRight = (arr, n) => {
    let arrCopy = [...arr];
    for (let i=1; i<=n; i++){
        arrCopy.unshift(arrCopy.pop());
    }
    return arrCopy;
}

