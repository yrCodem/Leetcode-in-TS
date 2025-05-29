"use strict";
const obj = {
    name: "Vishal",
    age: 20,
    'key-three': true,
    sayMyName: function () {
        console.log(this);
    }
};
// Adding a new property to the object
// obj.hobby = 'Football';
// Deleting a property from the object
// delete obj.age;
console.log(obj);
console.log(obj.name);
console.log(obj['key-three']);
console.log(obj.age);
// console.log(obj.hobby);
obj.sayMyName();
