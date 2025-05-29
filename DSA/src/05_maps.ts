// Creating an empty map with type annotations
const map1 = new Map<string, number>();

// Initialize with values
const map2 = new Map<string, string>([
  ['key1', 'value1'],
  ['key2', 'value2']
]);

// TypeScript can sometimes infer types
const map3 = new Map([
  [1, 'one'],
  [2, 'two']
]); // Map<number, string>

const map = new Map();
map.set("name", "Vishal"); // Name is the key and the Vishal is the value
map.set("age", 20);
console.log(map.get("name"));
console.log(map.get("age"));

console.log(map);

// Maps are iterable thats why we can use the for-of loop
for (const [key,value] of map) {
    console.log(key, value);
    console.log(`${key} : ${value}`);
}

// To check if a key exists in the map
console.log(map.has('name'));

// To delete the key-value pair
map.delete('name');
console.log(map);

// To chech the number of key-value pairs
console.log(map.size);

// To delete all key-value pairs
map.clear();
console.log(map);
