
function dataTypeSize(dataType: string): number {
    const dataSizes: { [key: string]: number } = {
        "Character": 1,  // Java uses 2 bytes for char, but typically 1 byte in C/C++
        "Integer": 4,
        "Long": 8,
        "Float": 4,
        "Double": 8
    };

    return dataSizes[dataType] ?? -1;
}

console.log(dataTypeSize("Character"));
