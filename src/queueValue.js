let Add = [30, 20, 10, 90];
let Add1 = [60, 70, 10, 20];
let result = [40];
let currentLength = result.length;

function main(Add) {

    addToQueue(Add);
    addToQueue(Add1);
    console.log(`After adding to queue result is ${result}`)
    removeFromQueue();
    removeFromQueue();
    verifyLength(result, currentLength);
}

function addToQueue(data) {
    for (let i = 0; i < data.length; i++) {
        result[currentLength] = data[i];
        currentLength += 1;
        result.length = currentLength;
    }
}

function removeFromQueue() {
    let removeItem = result[0];
    console.log("removeItem " + removeItem);
    deQueue();
}

function deQueue() {
    for (j = 0; j < currentLength - 1; j++) {
        result[j] = result[j + 1];

    }
    currentLength -= 1;
    result.length = currentLength;
    console.log(`dequeue currentLength` + currentLength);
}
function verifyLength(result, currentLength) {
    if (result.length == currentLength) {
        console.log(`Length Validation success ${currentLength}`)
    }
    else {
        console.log(`Length Validation failed where currnet Lenth is  ${currentLength} and actual length is ${result.length}`)
    }
}
main(Add);
console.log("Final result is " + result);
console.log("Final result length is " + currentLength);
console.log("Expected result length is " + result.length);

 // console.log(result[1]);