// Find the closest pair from two sorted arrays

let s = [1,4,8,9]
let target=9
let closestValue=Infinity;
let result1;
let result2;

function closestPair(s,target){
    let left=0;
    let right=s.length-1;
    while(left<right){
        let sum=s[left]+s[right];
        let diff=Math.abs(target-sum);
        console.log(`value of left is ${s[left]} and right is ${s[right]}`);
        console.log(`closestValue of is ${closestValue} and target-sum is ${target-sum}`);
         if(closestValue>(diff)){
            closestValue=diff;
            result1=s[left];
            result2=s[right];
            console.log("inside closest value is "+closestValue+ " and result1 is "+result1+" and result2 is "+result2);

         }
        if(sum>target){
            right--;
        }
        else{
            left++;
        }
        
    }
    console.log("closest value is "+closestValue+ " and result1 is "+result1+" and result2 is "+result2);
   
     
}

closestPair(s,target);