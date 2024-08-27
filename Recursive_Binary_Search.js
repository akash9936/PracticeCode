let data=[10,40,60,89,92]
let find=40;
let start=0;
let end=data.length-1;
let result=undefined;


function recursiveBinarySearchMain(find, s, e){
    console.log(`Start Enter is found at position ${s}`);
    let mid = Math.floor((s+e)/2);
    console.log(`Start mid is found at position ${data[mid]}`);
    if(data[mid]==find){
        result=mid;
        console.log(`Final Result is found at position 1 ${result}`);
        return;
    }
    if(data[mid]<find){
        s=mid+1;
        console.log(`Postive mid is found at position 2 ${mid}`);

        recursiveBinarySearchMain(find, s, e);
    }
    else{
        e=mid-1;
        console.log(`Negative mid is found at position 2 ${e}`);
        recursiveBinarySearchMain(find, s, e);
    }
}


recursiveBinarySearchMain(find,start,end);


