"use strict";
function dataTypeSize(dataType) {
    var _a;
    const dataSizes = {
        "Character": 1, // Java uses 2 bytes for char, but typically 1 byte in C/C++
        "Integer": 4,
        "Long": 8,
        "Float": 4,
        "Double": 8
    };
    return (_a = dataSizes[dataType]) !== null && _a !== void 0 ? _a : -1;
}
console.log(dataTypeSize("Character"));
