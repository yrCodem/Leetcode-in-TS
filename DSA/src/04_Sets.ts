// const set: Set = new set([1,2,3,4,5]);
const set = new Set([1, 2, 3, 4, 5]);
const set1 = new Set<string>(["1", "2", "3", "4", "5"]); // <string>
console.log(set);

// Adding an element to the set
set.add(6);
console.log(set);

// Removing an element from the set
set.delete(3);
console.log(set);

// Checking if an element exists in the set
console.log(set.has(4));

// Clearing the set
// set.clear();
console.log(set);

// Checking the size of the set
console.log(set.size);
