const data=[0,3,5,8,9];
const find=8;
let start=0;
let end=data.length-1;

function main(data, find){
    checkValue(data, find);

}
function checkValue(data, find){
 
    while(start<=end){
      
        let mid= Math.floor(((start+end)/2));
        if(data[mid]==find){
                    console.log(` Mid is find at position ${mid} and trying to find ${find}`);
       
            break;
        }
        else if(data[mid]<find){
            start=mid+1;
        }
        else{
            
            console.log(`Value can not find at position else ${data[mid]}`);
            end=mid-1;
        }
    }
}

main(data, find);