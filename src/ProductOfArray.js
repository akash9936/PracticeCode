// Product of Array Except Self
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

let s = [5, 2, 3, 4];
let temp = [];
let finallArray = [];
function main(s) {

    let sLength = s.length;
    let result = [1];
    let resultLength = result.length;
    // let temp=s;
    console.log(`temp is ${temp}`)
    for (let i = 0; i < sLength; i++) {
        let temp = [];
        temp.push(...s);
        // console.log(`temp is 1 ${temp}`)
        temp[i] = 1;
        // console.log(`temp is 2 ${temp}`)
        finallArray.push(...temp);
         console.log(`temp is 3 ${finallArray}`)
    }

    let k = 0;
    let x = 0;
    // result[0]=1;
    console.log(`finalArray length is ${s.length}`)
    let nums=s;
    const length = nums.length;
    // Initialize prefix product array
    let prefix = 1;
    for (let i = 0; i < length; i++) {
       
        result[i] = prefix;
        prefix *= nums[i];
        console.log(`result of ${i} prefix is  ${prefix} nums${[i]} is ${num[i]} `)
        
    }
    
    // Initialize suffix product array
    let suffix = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    
   // return result;

   // console.log(`finalArray is  ${finallArray}`)
    console.log(`result is  ${result}`)


}

main(s)
