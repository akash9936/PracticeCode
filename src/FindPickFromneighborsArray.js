//find pick which is not smaller than neighbors



//array

//comapre next array


let input = [1,6,1,7,8,2];


function main(data){
    let result=0;

    let dataLength=data.length;
    for(let i=0;i<dataLength;i++){

        if(i===0 && data[i]>data[i+1]){
            result=data[i]
            console.log(`result 3 is ${result}`);

        }
        if(i===dataLength-1 && data[i]>data[i-1] && result<data[i]){
            result=data[i];
            console.log(`result 2 is ${result}`);

        }


        if(data[i]>data[i+1] && data[i]>data[i-1] && result<data[i]){
                result=data[i]; 
                console.log(`result 1 is ${result}`);
        }

    }
return result;

}

console.log(`result is ${main(input)}`);