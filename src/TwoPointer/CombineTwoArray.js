//Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.


let data1=[1,4,5,7,8];
let data2=[0,2,3];
let result=[];

function combineData(data1, data2){
    let i=0;
    let j=0;

    while(i<data1.length && j<data2.length){
        if(data1[i]<data2[j]){
            result.push(data1[i]);
            console.log("pushed data1[i] as "+data1[i]);
            i++
        }
        else{
            result.push(data2[j])
            console.log("pushed data2[j as "+data2[j]);
            j++;
        }
    }
//push reming data of data1
    while(i<data1.length){
        result.push(data1[i]);
        console.log("out pushed data1[i] as "+data1[i]);
        i++;
    }
//push reming data of data2
    while(j<data2.length){
        result.push[data2[j]];
        j++;
    }

    return result;
}

console.log(combineData(data1,data2));