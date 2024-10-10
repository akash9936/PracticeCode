// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

let chars = ["a","a","b","b","c","c","c"];

// ["a", "a", "a", "b", "c", "c", "c"] temp = 1;
// ["a", "a", "a", "b", "c", "c", "c"] temp = 2;
// ["a", "1", "b", "b", "c", "c", "c"] tempVar=b;
// ["a", "1", "b", "b", "c", "c", "c"] temp=2
// ["a", "1", "b", "b", "c", "c", "c"] temp=3

let result = [];
function main(chars) {
    let write = 0; // Pointer to write the compressed data
    let read = 0;  // Pointer to read through the chars array

    while (read < chars.length) {
        let currentChar = chars[read];
        let count = 0;
        
        // Count consecutive occurrences of the current character
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }
        
        // Write the current character to the write pointer
        chars[write] = currentChar;
        write++;
        
        // If the count is greater than 1, write the digits of the count
        if (count > 1) {
            let countStr = count.toString();  // Convert count to string
            for (let char of countStr) {
                console.log(` char is ${char} and countStr is ${countStr}`);
                chars[write] = char;  // Write each digit of the count
                write++;
            }
        }
    }
    console.log(chars);
    // Return the new length of the compressed array
    return write;
}

console.log(main(chars));