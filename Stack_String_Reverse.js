//Reverse String with Stack

let result = []; // Initialize an empty array to store values.
let resultLength = result.length; // Variable to track the current length of the result array.

function push(addingValue) {
    // Add a value to the end of the result array.
    result[resultLength] = addingValue; 
    resultLength++; // Increment the length tracker.
}

function pop() {
    // Remove and return the last value from the result array.
    let LastValue = result[resultLength - 1]; 
    resultLength -= 1; // Decrement the length tracker.
    result.length = resultLength; // Adjust the length of the array to reflect the removed element.
    return LastValue;
}

function reverseString(data) {
    // Function to reverse the order of characters in a string.
    
    for (let i = 0; i < data.length; i++) {
        // Push each character of the input string into the result array.
        push(data[i]);
    }

    for (let j = 0; j < data.length; j++) {
        // Pop each character from the result array back into the input string in reversed order.
        data[j] = pop();
    }
}

let data = "Akash"; // Initialize the string to be reversed.
data = data.split(""); // Split the string into an array of characters.

reverseString(data); // Call the function to reverse the array of characters.
console.log(`Reversed Data is ${data.join("")}`); // Join the array back into a string and log the result.
