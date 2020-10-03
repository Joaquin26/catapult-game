var myWorker = new Worker("my_task.js");

myWorker.onmessage = function (oEvent) {
  console.log("Called back by the worker!\n");
};

var myWorker = new Worker("my_task.js");

myWorker.addEventListener("message", function (oEvent) {
  console.log("Called back by the worker!\n");
}, false);

myWorker.postMessage(""); // start the worker.

function emulateMessage (vVal) {
    return eval("(" + JSON.stringify(vVal) + ")");
}

// Tests

// test #1
var example1 = new Number(3);
alert(typeof example1); // object
alert(typeof emulateMessage(example1)); // number

// test #2
var example2 = true;
alert(typeof example2); // boolean
alert(typeof emulateMessage(example2)); // boolean

// test #3
var example3 = new String("Hello World");
alert(typeof example3); // object
alert(typeof emulateMessage(example3)); // string

// test #4
var example4 = {
    "name": "John Smith",
    "age": 43
};
alert(typeof example4); // object
alert(typeof emulateMessage(example4)); // object

// test #5
function Animal (sType, nAge) {
    this.type = sType;
    this.age = nAge;
}
var example5 = new Animal("Cat", 3);
alert(example5.constructor); // Animal
alert(emulateMessage(example5).constructor); // Object