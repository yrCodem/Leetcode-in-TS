"use strict";
// Queue Implementation using an array
// Eneueue(element) - Add an element to the end of the queue
// Dequeue() - Remove an element from the beginning of the queue
// Peek() - Return the element at the beginning of the queue
// isEmpty() - Check if the queue is empty
// Size() - Return the number of elements in the queue
class Queue {
    constructor() {
        this.items = [];
    }
    // Add element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }
    // Remove and return the front element
    dequeue() {
        return this.items.shift();
    }
    // Get the front element without removing it
    peek() {
        return this.items[0];
    }
    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
    // Get the queue size
    size() {
        return this.items.length;
    }
    // Clear the queue
    clear() {
        this.items = [];
    }
    // Print the queue (for debugging)
    print() {
        console.log(this.items.toString());
    }
}
// Usage
const numberQueue = new Queue();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
numberQueue.enqueue(30);
console.log(numberQueue.dequeue()); // 10
console.log(numberQueue.peek()); // 20
console.log(numberQueue.size()); // 2
