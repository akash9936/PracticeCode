//Reverse a String








mainV2();



//through for loop
function main() {
    const data = "1234567";
    let count = data.length;
    for (i = count - 1; i >= 0; --i) {
        console.log(data.charAt(i) + " and i is" + i + ", count is " + count);
    }
}

function mainV2() {
    const data = "1234567";
    for (const char of data) {
        console.log(data.charAt(data.length - char));
    }
}

//Longest Substring Without Repeating Characters

