// 1. function to problem 1:
// Note: This function takes two arguments, checks if they are valid number, and returns their sum. If either argument is not a number, the function throws an error

function calculateSum(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return num1 + num2;
}


// 2. function to problem 2:
// Note: This function takes one argument, checks if it is a valid number, and returns true if the number is even, and false otherwise. If the argument is not a number, the function throws an error.

function isEven(number) {
  if (typeof number !== 'number') {
    throw new Error('Argument must be a number');
  }
  return number % 2 === 0;
}


// 3. function to problem 3:
// Note: This function takes an array of numArray as input, and returns the largest number in the array. If the input is not an array or if the array is empty, the function throws an error.

function findMax(numArray) {
  if (!Array.isArray(numArray)) {
    throw new Error('Input must be an array');
  }
  if (numArray.length === 0) {
    throw new Error('Array must not be empty');
  }

  let max = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
  }

  return max;
}


// 4. function to problem 4:
// Note: This function takes a string as input and returns the reversed version of the string. If the input is not a string, the function throws an error.

function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  return str.split('').reverse().join('');
}


// 5. function to problem 5:
// Note: This function takes an array of numbers as input and returns a new array containing only the odd numbers. If the input is not an array, the function throws an error. If the input array contains non-numeric values, they are ignored.

function filterOddNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  return numbers.filter(num => num % 2 !== 0 && typeof num === 'number');
}


// 6. function to problem 6:
// Note: This function takes an array of numbers as input and returns the sum of all elements. If the input is not an array, the function throws an error.

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  return numbers.reduce((sum, num) => sum + num, 0);
}


// 7. function to problem 7:
// Note: This function takes an array of numbers as input and returns a new array sorted in ascending order. If the input is not an array, the function throws an error.

function sortArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  return [...numbers].sort((a, b) => a - b);
}



// 8. function to problem 8:
// Note: This function takes a string as input and returns the same string with the first letter capitalized. If the input is not a string, the function throws an error.

function capitalizeFirstLetter(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  if (str.length === 0) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}







