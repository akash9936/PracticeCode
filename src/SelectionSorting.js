

const data=[44,33,77,11,99,102,13,5,31,8];
let result;

function main(result){

    let dataLength=data.length;

    for(let i =0;i<dataLength-2;i++){
        let minId=i;
        console.log(`i id ${data[i]}`)
        for(let j=i+1;j<dataLength;j++){
            if(data[j]<data[minId]){
                minId=j;
            }
            console.log(`j id ${data[j]}`)
        }
        let temp=data[i];
        data[i]=data[minId];
        data[minId]=temp;
    }
    result=data;
console.log(`Result id ${result}`)
}

main(data);