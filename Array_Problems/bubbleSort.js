// Write a function that sorts a given array based on the bubble sort algorithm

const bubbleSort = arr => {
    for (let i=0; i<arr.length; i++){
      let temp;
      if (arr[i] && arr[i + 1] && arr[i] > arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        bubbleSort(arr);
      }
    }
    return arr;
}
