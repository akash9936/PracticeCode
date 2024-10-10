//Program to cyclically rotate an array by one


let input = [2, 3, 4, 1];
// [2, 2, 4, 1] temp = 3
// [2, 2, 3, 1] temp = 4
// [2, 2, 3, 4] temp = 1
// [1, 2, 3, 4]
let result = [];

function main(data) {
    let dataLength = data.length;
    let temp;
    result.push(...data);
    for (let i = 0; i < dataLength; i++) {

        if (i === dataLength - 1) {
            // console.log(`result[0] Result is ${result[0]} and ${i} and ${temp}`);
            result[0] = temp;
        }
        else {
            temp = data[i + 1];
            result[i + 1] = data[i];
        }
        // console.log(`Final Result is ${result} and ${i} and ${temp}`);
    }
    return result;
}

function mainOne(data) {
    let dataLength = data.length;
    let temp;
    result.push(...data);
    temp=data[dataLength-1];
    for (let i = dataLength-1; i > 0; i--) {
        data[i]=data[i-1];
    }
    data[0]=temp;
    return data;
}

let finalResult = mainOne(input);
console.log(`Final Result is ${finalResult}`);