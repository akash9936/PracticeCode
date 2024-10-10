// check String is Palindrome

let s = "aka";


// with interated approach
function main(s){
    let reverseS = s.split("").reverse().join('');
    console.log(reverseS);
    for(let i =0; i<reverseS.length;i++){
        if(reverseS[i].toLowerCase()!=s[i].toLowerCase()){

            console.log(`vaue of ${i} ${reverseS[i]} and ${reverseS[reverseS.length-i-1]}`);
            return false;
        }
    }
    return true;
}

// with two pointer approach
function mainV1(s) {
    let data = s.split("");
    let dataLength = data.length;
    let left = 0;
    let right = dataLength - 1;
    console.log(dataLength);
    while (left < right) {
        if (data[left].toLowerCase() != data[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// main(s);
console.log(`result i ${main(s)}`);