// Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, 
// false otherwise. This problem is similar to Two Sum. (In Two Sum, the input is not sorted).

let s =[1,4,7,9];
let target=5;

// with two pointer approach O(n)
function main(s, target){
    let dataLength=s.length;
    let left = 0;
    let right = dataLength-1;

    while(left<right){
        let totalData=s[left]+s[right];
        if(totalData===target){
            console.log(`while data true is ${s[left]} and ${s[right]}`)
        return true;
        }
        if(totalData>target){
            right--;
        }
        else{
            left++;
        }
    }
    return false;
}


// O(n^2)


function mainV1(s, target){
    dataLength = s.length;
    for(let i=0;i<dataLength-2;i++){
        for(let j=i+1;j<dataLength-1;j++){
            if(s[i]+s[j]===target){
                console.log(`inside s[i] is ${s[i]} and ${s[j]} `)
                return true;
            }

        }
    }
}

console.log(mainV1(s,target));