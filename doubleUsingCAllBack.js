// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.


function doubleUsingCallback(arr, callback) {
    
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array of integers.');
    }
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function.');
    }
  
    
    return arr.map(callback);
  }
  
  
  function doubleNumber(num) {
    return num * 2;
  }
  
  
  const inputArray = [1, 2, 3, 4, 5];
  const doubledArray = doubleUsingCallback(inputArray, doubleNumber);
  
  console.log(doubledArray); 
  