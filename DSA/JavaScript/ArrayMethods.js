"use strict";
// Array.ts
const array = [1, 2, 3, 4, 5];
// Array Push method - Adding element at the end
array.push(6);
console.log(array);
// Array Unshift method - Adding element in the beginning
array.unshift(0);
console.log(array);
// Array Pop Method - Removing an item from the end of an array
array.pop();
console.log(array);
// Array Shift Method - Removing an item from the beginning of an array
array.shift();
console.log(array);
// Array Slice Method - Extracting a portion of an array
const slicedArray = array.slice(1, 4);
console.log(slicedArray);
// Array Map method - Creating a new array by applying a function to each element
const mappedArray = array.map((item) => item * 2);
console.log(mappedArray);
// Array concat method - Combining two or more arrays
const concatenatedArray = array.concat([7, 8, 9]);
console.log(concatenatedArray);
// Array join method - Converting an array into a string
const joinedString = array.join("-");
console.log(joinedString);
// Array Splice method - Adding or removing elements from an array
array.splice(1, 2, 10, 11);
console.log(array);
// Array filter method - Creating a new array with elements that pass a test
const filteredArray = array.filter((item) => item % 2 === 0);
console.log(filteredArray);
// Array Reduce test - Creating a single value by iterating through an array
const reducedValue = array.reduce((total, item) => total + item, 0);
console.log(reducedValue);
// Array ReduceRight test - Creating a single value by iterating through an array from the right
const reducedValueRight = array.reduceRight((total, item) => total + item, 0);
console.log(reducedValueRight);
// Array Reverse test - Reversing an array
const reversedArray = array.reverse();
console.log(reversedArray);
// Array Sort test - Sorting an array
const sortedArray = array.sort();
console.log(sortedArray);
// Array Sort test - Sorting an array in reverse order
const sortedArrayReverse = array.sort((a, b) => b - a);
console.log(sortedArrayReverse);
// Array Includes test - Checking if an array contains a specific value
const includesValue = array.includes(4);
console.log(includesValue);
// Array IndexOf test - Finding the index of a specific value in an array
const indexOfValue = array.indexOf(4);
console.log(indexOfValue);
// Array LastIndexOf test - Finding the last index of a specific value in an array
const lastIndexOfValue = array.lastIndexOf(4);
console.log(lastIndexOfValue);
// Array Find test - Finding the first element in an array that passes a test
const foundElement = array.find((item) => item % 2 === 0);
console.log(foundElement);
// Array FindIndex test - Finding the index of the first element in an array that passes a test
const foundIndex = array.findIndex((item) => item % 2 === 0);
console.log(foundIndex);
// Array Every test - Checking if all elements in an array pass a test
const allPass = array.every((item) => item % 2 === 0);
console.log(allPass);
// Array Some test - Checking if any element in an array passes a test
const somePass = array.some((item) => item % 2 === 0);
console.log(somePass);
// Array  Fill test - Filling an array with a specific value
const filledArray = Array(5).fill(0);
console.log(filledArray);
// Array forEach test - Executing a function once for each element in an array
array.forEach((item) => console.log(item));
// Array flat method - Flattening a nested array
const nestedArray = [[1, 2], [3, 4]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);
// Array Flatmap method - Creating a new array by applying a function to each element and then flattening the result
const flatMappedArray = array.flatMap((item) => [item, item * 2]);
console.log(flatMappedArray);
