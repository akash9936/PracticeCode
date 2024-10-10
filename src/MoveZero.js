let input = [0, 1, 0, 3, 12];
let result = input;

function main(data) {
    let dataLength = data.length;
    // console.log("dataLength 2"+dataLength);
    let lastNonZeroFoundNum = 0;
    for (let i = 0; i < dataLength; i++) {
        if (data[i] != 0) {
           if(i!=lastNonZeroFoundNum){
            
           }
        }
    }
    console.log("lastNonZeroFoundNum result is " + lastNonZeroFoundNum);

    for (let i = lastNonZeroFoundNum; i < dataLength; i++) {
        data[i] = 0;
    }
}


main(input);
console.log("Final result is " + input);