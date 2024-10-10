// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water 
//(blue section) the container can contain is 49. between 8 and 7.

let height = [1,8,6,2,5,4,8,3,7];

function main(height){
    let left =0;
    let right = height.length;
    let maxArea=0;
    while(left<right){
        // console.log("maxArea "+left+ " and " +right);
        let dataHeight = height[left] < height[right] ? height[left] : height[right];
        let dataLength=right-left;
        let dataArea= dataHeight*dataLength;
        maxArea = maxArea<dataArea ? dataArea : maxArea;
        // console.log("maxArea "+maxArea);
        if(height[left]<height[right]){
            left=left+1;
            // console.log("left "+left);
        }
        else{
            right=right-1;
            // console.log("right "+right);
        }

    }
    return maxArea;

}

console.log(main(height));