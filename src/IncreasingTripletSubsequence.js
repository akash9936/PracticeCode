// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
let input = [9,2,3,4,5,1];
let result=false;

function main(nums){
    let first = Infinity;
    let second = Infinity;
    
    for (let num of nums) {
        if (num <= first) {
            first = num;  // update the smallest number
        } else if (num <= second) {
            second = num; // update the second smallest number
        } else {
            // if we find a number greater than both first and second, we have a triplet
            return true;
        }
    }
    
    return false;
}

main(input);
console.log(result);