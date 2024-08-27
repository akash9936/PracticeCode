class reverseString {
    currentLength; // Variable to track the current length of the temp array.
    temp = []; // Initialize an empty array to store values.

    constructor(data) {
        this.currentLength = this.temp.length; // Set currentLength to the length of the temp array.
    }

    push(data) {
        // Method to add each character of the input string to the temp array.
        for (let i = 0; i < data.length; i++) {
            this.temp[this.currentLength] = data[i]; // Add character to temp array.
            this.currentLength += 1; // Increment the length tracker.
        }
    }

    pop(data) {
        // Method to remove each character from the temp array and place it back into the input string in reversed order.
        for (let j = 0; j < this.temp.length; j++) {
            let lastValue = this.temp[this.currentLength - 1]; // Get the last value in the temp array.
            data[j] = lastValue; // Assign the last value to the input string.
            this.currentLength -= 1; // Decrement the length tracker.
        }
    }
}

let data = "Akash"; // Initialize the string to be reversed.
data = data.split(""); // Split the string into an array of characters.
let reverseStringObject = new reverseString(data); // Create an instance of the reverseString class.
reverseStringObject.push(data); // Call the push method to add characters to the temp array.
console.log(`push ${data}`); // Log the array after push method.
reverseStringObject.pop(data); // Call the pop method to reverse the array of characters.
console.log(`pop ${data}`); // Log the array after pop method.
