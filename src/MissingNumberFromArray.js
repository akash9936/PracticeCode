//Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers
// Input: arr[] = {1, 2, 4, 6, 3, 7, 8} , N = 8
// Output: 5
// Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5






// 1: []
//1st for loop from 1 to N
//2nd loop to iteret array for each value from 1 to N
//if value match break
//if value not match for any of 1 to N value with array we increment count so we can check value did not found in complete array


function main(data) {
    let dataLength = data.length;
    let result;


    for (let i = 1; i < dataLength + 1; i++) {
        let count = 0;
        for (let j = 0; j < dataLength; j++) {

            // console.log(`Final Result is ${i} and ${j}`);
            if (data[j] === i) {
                break;
            }
            else {
                count = count + 1;
                console.log(`count Result is ${i} and ${j} and ${count}`);

                if (dataLength - 1 === j && count === dataLength) {
                    console.log(`Final Result is ${i} and ${j}`); //i=5, j=6, count=7, dataLength=7

                    result = i;
                    return result;
                }
            }

        }

    }
    return result;
}

function mainOne(data) {
    let dataLength = data.length;
    let result;


    for (let i = 1; i < dataLength + 1; i++) {
        for (let j = 0; j < dataLength; j++) {
            // console.log(`Final Result is ${i} and ${j}`);
            if (data[j] === i) {
                break;
            }
            else {
               return i;
            }

        }
    }
    return result;
}

//check next value is next int or not
let input = [1, 2, 4, 7, 6, 5, 8];

function mainTwo(data){
    let dataLength=data.length;
    data=data.sort((a,b)=>a-b);
    let missingNumber=[];
    for(let i=0;i<dataLength-1;i++){
        if(data[i]!==data[i+1]-1){
            missingNumber.push(data[i]+1);
        }
    }
    return missingNumber;
}

//less complex
function mainThree(data){
    let dataLength= data.length+1;
    let expectedSum=(dataLength*(dataLength+1))/2;
    let actualSum=0;
    let result;
    for(let i=0;i<dataLength-1;i++){
        console.log(`Final Result actualSum ${actualSum}`);
        actualSum=actualSum+data[i];
    }
    result= expectedSum-actualSum;
    return result;
}

let finalResult = mainThree(input);

console.log(`Final Result is ${finalResult}`);