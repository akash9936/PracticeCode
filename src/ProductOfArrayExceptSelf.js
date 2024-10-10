function productOfArrayExceptSelf(arr) {
    const n = arr.length;
    const result = new Array(n).fill(1);

    // Calculate the left product for each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= arr[i];
        console.log(`result of Array Except Self: ${result}`); 
        console.log(`leftProduct of Array Except Self: ${leftProduct}`); 

    }

    // Calculate the right product for each element and multiply it with the left product
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }

    return result;
}

const input = [1, 2, 3, 4];
const output = productOfArrayExceptSelf(input);

console.log(`Product of Array Except Self: ${output}`); 
// Output: [24, 12, 8, 6]
