
let str1="hella"
let str2="llaeh"

//this take nlog(n) time as sort take log(n) times
function main(data1, data2){
    return data1.split('').sort().join()===data2.split('').sort().join();
}


//reduced version of time complex n
function main1(data1, data2){
    if(data1.length!=data2.length){
        return false
    }
    let count={};

    for(let i=0;i<data1.length;i++){
        //if value is not present it go to 0 and add 1, if dara1[i] 
        //is present than it take the value of key count[data1[i]] and add to 1 and 2nd time it will be 2
        count[data1[i]]= (count[data1[i]] || 0)+1;
        console.log(count) 
    }


}

console.log(main1(str1,str2));
