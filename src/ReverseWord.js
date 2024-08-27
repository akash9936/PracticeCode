// // Input: s = "  hello world  "
// // Output: "world hello"

// let inputValue="My Name Is Akash";
// let splitOriginValue=[];
// let reverseWordArray=[];

// function splitOriginValueImple(s){
//     console.log(`inputValue is ${s}`);
//     splitOriginValue=s.split(" ");
    
// }
// function reverseWordArrayImple(splitOriginValueData){
//     reverseWordArray=splitOriginValueData;
//     // console.log(`After split value is ${reverseWordArray}`);
//     let inputValueLength=reverseWordArray.length;
//     // console.log(`inputValue.length is ${inputValueLength}`);
//     for(let i=0;i<inputValueLength;i++){
//         let temp="";
//         temp=splitOriginValue[inputValueLength-1];
//         // console.log(`temp ${i} ${temp}`);
//         reverseWordArray[inputValueLength-1]= splitOriginValue[i];
       
//         reverseWordArray[i]=temp;
//     //   console.log(`splitOriginValue[i] ${reverseWordArray}`);

//       inputValueLength-=1;
//     //   reverseWordArray.length-=1;

//     }

// }

// function reversWord(){
//    splitOriginValueImple(inputValue);
//    reverseWordArrayImple(splitOriginValue);

    
// }
// reversWord();
// console.log(`splitOriginValue ${splitOriginValue}`);
// console.log(`reverseWordArray final ${reverseWordArray}`);



function main(){
    let inputValue=" My Name is  Akash ";
    
    inputValue=inputValue.trim().replace(/\s+/g, ' ');
    let splitOriginValue=inputValue.split(" ");
    console.log("inputValue -"+inputValue);
   // splitOriginValue.replace(/\s+/g, '');


   
    let inputValueLength=splitOriginValue.length;
    let reverseWordArray=splitOriginValue;
   
   for(let i=0;i<inputValueLength;i++){
       splitOriginValue[i]=splitOriginValue[i].trim();
       let temp="";
       temp=reverseWordArray[splitOriginValue.length-1-i];
       reverseWordArray[splitOriginValue.length-1-i]=splitOriginValue[i];
       splitOriginValue[i]=temp;
       console.log("temp "+temp);
       inputValueLength-=1;
   }
   console.log("reverseWordArray "+reverseWordArray.join(" "));
}

main();